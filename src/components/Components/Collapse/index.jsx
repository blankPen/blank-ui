/*
 * @Author: pengzhen
 * @Date:   2016-07-02 15:56:36
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 15:46:36
 */

'use strict';
import './index.less';
import React from 'react';
import classnames from 'classnames';
import linkFunctions from '../utils/linkFunctions';
import bindArray from '../utils/bindArray';
import { css } from '../utils/dom';
import Transition from '../Transition';


const MARGINS = {
    height: ['marginTop', 'marginBottom'],
    width: ['marginLeft', 'marginRight']
};


export default class Collapse extends React.Component {
    static propTypes = {
        open: React.PropTypes.bool,
        duration: React.PropTypes.number,
        type: React.PropTypes.oneOf(['height', 'width']),
    };

    static defaultProps = {
        open: false,
        duration: 300,
        unmountOnExit: false,
        type: 'height'
    };
    
    constructor(props) {
        super(props);
        bindArray(this,[
            'handleEnter',
            'handleEntering',
            'handleEntered',
            'handleExit',
            'handleExiting'
        ]);
    }

    /* -- Expanding -- */
    handleEnter(elem) {
        elem.style[this.props.type] = '0';
    }

    handleEntering(elem) {
        setTimeout(() => {
            elem.style[this.props.type] = this._getScrollTypeValue(elem, this.props.type) + 'px';
        }, 10)
    }

    handleEntered(elem) {
        elem.style[this.props.type] = null;
    }

    /* -- Collapsing -- */
    handleExit(elem) {
        elem.style[this.props.type] = this._getTypeValue(elem, this.props.type) + 'px';
    }

    handleExiting(elem) {
        setTimeout(() => {
            elem.style[this.props.type] = '0';
        }, 10)
    }

    _getTypeValue(elem, type) {
        let value = elem[`offset${capitalize(type)}`];
        let margins = MARGINS[type];
        return (value +
            parseInt(css(elem, margins[0]), 10) +
            parseInt(css(elem, margins[1]), 10)
        );
    }

    _getScrollTypeValue(elem, type) {
        return elem[`scroll${capitalize(type)}`];
    }

    render() {
        let enter = linkFunctions(this.handleEnter, this.props.onEnter);
        let entering = linkFunctions(this.handleEntering, this.props.onEntering);
        let entered = linkFunctions(this.handleEntered, this.props.onEntered);
        let exit = linkFunctions(this.handleExit, this.props.onExit);
        let exiting = linkFunctions(this.handleExiting, this.props.onExiting);
        return (
            <Transition
                ref="transition"
                in={this.props.open}
                className={classnames(this.props.className, { width: this.props.type === 'width' })}
                timeout={this.props.duration}
                exitedClassName="will-anim collapse"
                exitingClassName="will-anim collapsing"
                enteredClassName="will-anim collapse in"
                enteringClassName="will-anim collapsing"
                onEnter={enter}
                onEntering={entering}
                onEntered={entered}
                onExit={exit}
                onExiting={exiting}
                onExited={this.props.onExited}
            >
                <div>{this.props.children}</div>
            </Transition>
        );
    }
}

function capitalize(str) {
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.substr(1);
}
