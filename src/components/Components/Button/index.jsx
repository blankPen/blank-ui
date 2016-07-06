/*
 * @Author: pengzhen
 * @Date:   2016-07-05 19:54:08
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 21:06:46
 */

'use strict';
import './index.less';
import React from 'react';
import classnames from 'classnames';
import wave from '../Wave/';

@wave()
class Btn extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let props = {...this.props};
        delete props.waveColor;
        return (
            <button {...props}>{this.props.children}</button>
        );
    }
}

export class RaisedButton extends React.Component {
    static propTypes = {
        type: React.PropTypes.string,
        size: React.PropTypes.oneOf(['sm','md','lg'])
    };
    static defaultProps = {
        type: 'default',
        size: 'md'
    };
    constructor(props) {
        super(props);
    }

    render() {
        const childProps = { ...this.props };
        Object.keys(RaisedButton.propTypes).forEach((key)=>{ delete childProps[key] })
        return ( 
            <Btn 
                {...childProps}
                waveColor = {this.props.type == 'default'?'rgba(0,0,0,0.1)':'rgba(225,225,225,0.4)'}
                className = {classnames(
                'btn btn-raised',
                'btn-' + this.props.size,
                'btn-' + this.props.type,
                this.props.className)}
            > 
                {this.props.children}
            </Btn>
        );
    }
}

export class FlatButton extends React.Component {
    static propTypes = {
        type: React.PropTypes.string,
    };
    static defaultProps = {
        type: 'default'
    };
    constructor(props) {
        super(props);
    }

    render() {
        const childProps = { ...this.props };
        Object.keys(FlatButton.propTypes).forEach((key)=>{ delete childProps[key] })
        return ( 
            <Btn 
                {...childProps}
                className = {classnames(
                'btn btn-flat',
                'btn-' + this.props.size,
                'btn-' + this.props.type,
                this.props.className)}
            > 
                {this.props.children}
            </Btn>
        );
    }
}

export default {
    RaisedButton
}
