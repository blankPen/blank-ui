/*
 * @Author: pengzhen
 * @Date:   2016-07-17 19:37:09
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-17 23:00:12
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import * as DomUtils from '../utils/dom';
import throttle from '../utils/throttle';
import bindArray from '../utils/bindArray';

export default class ListView extends React.Component {
    static propTypes = {
        data: React.PropTypes.array,
        speed: React.PropTypes.number
    };
    static defaultProps = {
        speed: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            cur: 0,
            size: 10
        }
        this.timer = 0;
        bindArray(this, ['handleScroll', 'handleWheel']);
    }
    filterData(data) {
        let newData = [...data];
        let len = newData.length;
        let {
            cur,
            size
        } = this.state;
        cur = cur - size;
        if(cur < 0){ cur = 0 }
        size = size * 3;
        // console.log(cur)
        if (size >= len) {
            return newData;
        } else {
            return newData.splice(cur, size);
        }
    }
    handleWheel(e) {
        let itemH = this.refs['item0'].offsetHeight;
        let index = ~~(e.target.scrollTop / itemH);
        let cur_index = this.state.cur;
        if ((Math.abs(cur_index - index)) >= this.state.size) {
            this.setState({
                cur: index
            });
        }
    }
    componentDidMount() {
        // this.listNode = ReactDOM.findDOMNode(this.refs.list);
        // this.contentNode = ReactDOM.findDOMNode(this.refs.content);
        DomUtils.addEventListener(ReactDOM.findDOMNode(this.refs.list), 'scroll', throttle(this.handleWheel));
    }
    renderList(data = []) {
        if(data.length > this.state.size*5){
            data = this.filterData(data);
        }
        let child = this.props.child;
        if (typeof child == 'function') {
            return data.map((item, key) => {
                return React.cloneElement(child(item, key), {
                    key: key,
                    ref: 'item' + key
                })
            });
        } else {
            return data.map((item, key) => {
                return React.cloneElement(child, {
                    key: key,
                    ref: 'item' + key,
                    data: item
                });
            });
        }
    }
    render() {
        const {
            cur,
            size
        } = this.state;
        const data = this.props.data || [];
        let content;
        if(data.length > this.state.size*5){
            let style = {};
            if(cur-size<0){
                style = {
                    marginTop: 0, 
                    marginBottom: (data.length - cur - this.state.size*3) * 50
                };
            }else{
                style = {
                    marginTop: (cur-size) * 50, 
                    marginBottom: (data.length - (cur-size) - this.state.size*3) * 50
                };
            }
            content = (
                <div style = {style} >{this.renderList(data)}</div>
            );
        }else{
            content = (
                <div>{this.renderList(data)}</div>
            );
        }
        return ( 
            <div ref = 'list'
                style = {{
                    height: 300,
                    overflow: 'auto',
                    position: 'relative'
                }} 
            >{content}</div>
        );
    }
}
