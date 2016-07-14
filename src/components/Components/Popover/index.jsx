/*
 * @Author: pengzhen
 * @Date:   2016-07-09 14:49:56
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-09 17:49:26
 */

'use strict';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import * as DomUtils from '../utils/dom';
// import Transition from '../Transition';
// 
export default class Popover extends React.Component {
    static propTypes = {
        content: React.PropTypes.node.isRequired,
        trigger: React.PropTypes.oneOf(['hover', 'focus', 'click']).isRequired,
    };
    static defaultProps = {
        trigger: 'click'
    };
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.triggers = {
            click: {
                onClick: () => {
                    let event;
                    if (this.targetDom.stopEvent) {
                        this.targetDom.stopEvent = false;
                        return;
                    }
                    if (!this.state.show) {
                        this.toggleShow.call(this, true)
                        event = DomUtils.addEventListener(document.body, 'click', (e) => {
                            if (!this._reactInternalInstance) {
                                return event.remove();
                            }
                            if (this.overlayDom && !DomUtils.contains(this.overlayDom, e.target)) {
                                this.toggleShow.call(this, false);
                                event.remove();
                                this.targetDom.stopEvent = this.targetDom && DomUtils.contains(this.targetDom,e.target);
                            }
                        });
                    }
                }
            },
            hover: {
                onMouseEnter: (e) => {
                    let event;
                    if (!this.state.show) {
                        this.toggleShow.call(this, true);
                        event = DomUtils.addEventListener(this.containerDom, 'mouseleave', (e) => {
                            this.toggleShow.call(this, false);
                            event.remove();
                        });
                    }
                }
            },
            focus: {
                onFocus: (e) => {
                    this.toggleShow.call(this, true);
                },
                onBlur: (e) => {
                    this.toggleShow.call(this, false);
                }
            }
        }
    }
    toggleShow(flag) {
        this.setState({
            show: flag === null ? !this.state.show : flag
        });
    }
    toAnim(flag, delay = 0) {
        var dom = ReactDOM.findDOMNode(this.refs.overlay);
        if (dom) {
            setTimeout(() => {
                let height = 0;
                if (flag && this.contentDom) {
                    height = this.contentDom.offsetHeight + 'px';
                }
                DomUtils.css(dom, 'height', height);
            }, delay)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.show != this.state.show) {
            this.toAnim(this.state.show, this.state.show ? 10 : 200);
        }
    }
    componentDidMount() {
        this.containerDom = ReactDOM.findDOMNode(this.refs.container);
        this.overlayDom = ReactDOM.findDOMNode(this.refs.overlay);
        this.targetDom = ReactDOM.findDOMNode(this.refs.target);
        this.contentDom = ReactDOM.findDOMNode(this.refs.content);

    }
    componentWillUnmount() {
        this.isUnmount = true;
    }
    render() {
        return (
            <div className='popover' ref='container' >
                {React.cloneElement(this.props.children,{
                    ref: 'target',
                    ...this.triggers[this.props.trigger]
                })}
                <div className="popover-overlay" ref='overlay'>
                    {React.cloneElement(this.props.content,{
                        ref: 'content'
                    })}
                </div>
            </div>
        );
    }
}
