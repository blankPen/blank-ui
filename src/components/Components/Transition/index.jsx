/*
 * @Author: pengzhen
 * @Date:   2016-07-05 13:56:09
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 14:43:05
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import TRANSITION_EVENT from './properties';
import * as DomUtils from '../utils/dom';

export const UNMOUNTED = 0;
export const EXITED = 1;
export const ENTERING = 2;
export const ENTERED = 3;
export const EXITING = 4;

export default class Transition extends React.Component {
    static propTypes = {
        'in': React.PropTypes.bool,

        unmountOnExit: React.PropTypes.bool,

        transitionAppear: React.PropTypes.bool,

        timeout: React.PropTypes.number,

        exitedClassName: React.PropTypes.string,

        exitingClassName: React.PropTypes.string,
 
        enteredClassName: React.PropTypes.string,

        enteringClassName: React.PropTypes.string,
        
        onEnter: React.PropTypes.func,
        
        onEntering: React.PropTypes.func,
        
        onEntered: React.PropTypes.func,
        
        onExit: React.PropTypes.func,
        
        onExiting: React.PropTypes.func,
        
        onExited: React.PropTypes.func
    };
    static defaultProps = {
        'in': false,
        unmountOnExit: false,
        transitionAppear: false,

        timeout: 5000,

        onEnter: noop,
        onEntering: noop,
        onEntered: noop,

        onExit: noop,
        onExiting: noop,
        onExited: noop
    };
    constructor(props) {
        super(props);
        let initialStatus = undefined;
        if (props['in']) {
            initialStatus = props.transitionAppear ? EXITED : ENTERED;
        } else {
            initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
        }
        this.state = {
            status: initialStatus
        };

        this.nextCallback = null;
    }
    componentDidMount() {
        if (this.props.transitionAppear && this.props['in']) {
            this.performEnter(this.props);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps['in'] && this.props.unmountOnExit) {
            if (this.state.status === UNMOUNTED) {
                this.setState({
                    status: EXITED
                });
            }
        } else {
            this._needsUpdate = true;
        }
    }
    componentDidUpdate() {
        let status = this.state.status;

        if (this.props.unmountOnExit && status === EXITED) {
            if (this.props['in']) {
                this.performEnter(this.props);
            } else {
                this.setState({
                    status: UNMOUNTED
                });
            }
            return;
        }

        if (this._needsUpdate) {
            this._needsUpdate = false;

            if (this.props['in']) {
                if (status === EXITING) {
                    this.performEnter(this.props);
                } else if (status === EXITED) {
                    this.performEnter(this.props);
                }
            } else {
                if (status === ENTERING || status === ENTERED) {
                    this.performExit(this.props);
                }
            }
        }
    }
    componentWillUnmount() {
        this.cancelNextCallback();
    }
    performEnter(props) {

        this.cancelNextCallback();
        let node = ReactDOM.findDOMNode(this);

        props.onEnter(node);

        this.safeSetState({
            status: ENTERING
        }, () => {
            this.props.onEntering(node);

            this.onTransitionEnd(node, () => {
                this.safeSetState({
                    status: ENTERED
                }, () => {
                    this.props.onEntered(node);
                });
            });
        });
    }
    performExit(props) {

        this.cancelNextCallback();
        let node = ReactDOM.findDOMNode(this);

        props.onExit(node);

        this.safeSetState({
            status: EXITING
        }, () => {
            this.props.onExiting(node);

            this.onTransitionEnd(node, () => {
                this.safeSetState({
                    status: EXITED
                }, () => {
                    this.props.onExited(node);
                });
            });
        });
    }
    cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    }
    safeSetState(nextState, callback) {
        this.setState(nextState, this.setNextCallback(callback));
    }
    setNextCallback(callback) {
        let active = true;

        this.nextCallback = (event) => {
            if (active) {
                active = false;
                this.nextCallback = null;

                callback(event);
            }
        };

        this.nextCallback.cancel = function() {
            active = false;
        };

        return this.nextCallback;
    }
    onTransitionEnd(node, handler) {
        this.setNextCallback(handler);

        if (node) {
            this.event = DomUtils.addEventListener(node, TRANSITION_EVENT.end, this.nextCallback);
            setTimeout(this.nextCallback, this.props.timeout);
        } else {
            setTimeout(this.nextCallback, 0);
        }
    }

    render() {
        let status = this.state.status;
        if (status === UNMOUNTED) {
            return null;
        }

        const { children,className } = this.props;

        let transitionClassName = undefined;
        if (status === EXITED) {
            transitionClassName = this.props.exitedClassName;
        } else if (status === ENTERING) {
            transitionClassName = this.props.enteringClassName;
        } else if (status === ENTERED) {
            transitionClassName = this.props.enteredClassName;
        } else if (status === EXITING) {
            transitionClassName = this.props.exitingClassName;
        }

        let child = React.Children.only(children);
        return React.cloneElement(child, Object.assign({}, {
            className: classnames(child.props.className, className, transitionClassName)
        }));
    }
}

function noop() {}
