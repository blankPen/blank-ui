/*
 * @Author: pengzhen
 * @Date:   2016-07-05 18:10:34
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 14:15:45
 */

'use strict';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import * as DomUtils from '../utils/dom';
import bindArray from '../utils/bindArray';
import throttle from '../utils/throttle';


const ERROR = 'error';
const SUCCESS = 'success';
const LOADING = 'loading';
const NULL = null;
const HOLDER_LOADING = <div className='img-holder-loading'> 加载中 </div>;
const HOLDER_ERROR = <div className='img-holder-error'> 加载失败 </div>;

export default class Picture extends React.Component {
    static propTypes = {
        holderError: React.PropTypes.node,
        holderLoading: React.PropTypes.node,
        preview: React.PropTypes.bool
    };
    static defaultProps = {
        holderError: HOLDER_ERROR,
        holderLoading: HOLDER_LOADING,
        preview: false
    };
    constructor(props) {
        super(props);
        this.state = {
            status: LOADING
        }
        bindArray(this,['countPosition','handleError','handleLoad']);
    }
    handleError(){
        this.setState({
            status: ERROR
        });
    }
    handleLoad(src){
        this.setState({
            status: SUCCESS
        });
    }
    loadImg(src){
        var img = new Image(); 
        img.src = src;
        img.onload = this.handleLoad.bind(this,src);
        img.onerror = this.handleError.bind(this,src);
    }
    countPosition(){
        const dom = this.refs.dom;
        let scrollTop = document.documentElement.clientHeight + DomUtils.getScroll().top;
        let offsetTop = DomUtils.getOffset(ReactDOM.findDOMNode(dom)).top;
        if (offsetTop < scrollTop) {
            this.loadImg(this.props.src);
            this.listener && this.listener.remove();
        }
    }
    componentDidMount() {
        this.listener = DomUtils.addEventListener(window,'scroll',throttle(this.countPosition));
        this.countPosition();
    }
    componentWillUnmount() {
        this.listener && this.listener.remove();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.src != this.props.src) {
            if(this.state.status !== LOADING){
                this.loadImg(nextProps.src);
            }
        }
    }
    render() {
        let childProps = {...this.props};
        Object.keys(Picture.propTypes).forEach(key=>{ delete childProps[key] });


        const img = <img {...childProps} ref='dom' src={this.props.src}/>;
        const status = this.state.status;

        if(status === SUCCESS){
            return img;
        }else if(status === ERROR){
            return React.cloneElement(this.props.holderError,{
                ref: 'dom'
            });
        }else if(status === LOADING){
            return React.cloneElement(this.props.holderLoading,{
                ref: 'dom'
            });
        }
    }
}
