/*
 * @Author: pengzhen
 * @Date:   2016-07-04 17:08:39
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-04 20:32:31
 */

'use strict';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import throttle from '../utils/throttle';
import bindArray from '../utils/bindArray';
import * as DomUtils from '../utils/dom';

export default class IndexLink extends React.Component {
    static propTypes = {
        parent: React.PropTypes.object.isRequired,
        data: React.PropTypes.array,
    };
    static defaultProps = {
        data: [],
        duration: 300
    };
    constructor(props) {
        super(props);
        this.state = {
            active: null
        }
        bindArray(this,['handleScroll']);
    }
    handleClick(link){

        this.anim && this.anim.stop();
        const refs = this.props.parent.refs || {};
        let dom = ReactDOM.findDOMNode(refs[link.ref]);
        if(dom){
            if (dom._reactInternalInstance) {
                dom = ReactDOM.findDOMNode(dom);
            }
            this.anim = DomUtils.scrollTo(DomUtils.getOffset(dom).top,this.props.duration,()=>{
                console.log('end anim')
                this.setState({
                    active: link.ref
                });
            });
        }

    }
    handleScroll(){
        let active = null;
        let scrollTop = DomUtils.getScroll().top;

        const refs = this.props.parent.refs || {};
        const data = this.props.data;
        for (var i = 0; i < data.length; i++) {
            let link = data[i];
            let dom = ReactDOM.findDOMNode(refs[link.ref]);
            if(dom){
                if (dom._reactInternalInstance) {
                    dom = ReactDOM.findDOMNode(dom);
                }
                var offsetTop = DomUtils.getOffset(dom).top;
                if( scrollTop + document.documentElement.clientHeight >= offsetTop
                    && scrollTop <= offsetTop){
                    active = link.ref;
                    break;
                }   
            }
        }
        if(active){
            this.setState({
                active
            });
        }
    }
    componentDidMount() {
        this.handleScroll();
        this.event = DomUtils.addEventListener(window,'scroll',throttle(this.handleScroll,150,500));
    }
    componentWillUnmount() {
        this.event.remove();
    }
    renderLinks(){
        const data = this.props.data;
        if(this.props.renderLinks){
            return this.props.renderLinks(this.state.active,link,this.handleClick.bind(this,link))
        }
        return data.map((link,i)=>{
            return (
                <li 
                    key={i} 
                    onClick={this.handleClick.bind(this,link)} 
                    className={classnames('index',{
                        active: this.state.active == link.ref
                    })} 
                >
                   <a >{link.name}</a>
                </li>
            )
        })
    }
    render() {
        return (
            <ul className='scroll-index'>
                {this.renderLinks()}
            </ul>
        );
    }
}
