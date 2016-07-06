/*
 * @Author: pengzhen
 * @Date:   2016-07-04 14:06:45
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 13:47:17
 */

'use strict';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import * as DomUtils from '../utils/dom';
import throttle from '../utils/throttle';
import bindArray from '../utils/bindArray';

function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}

function getOffset(element) {
    var rect = element.getBoundingClientRect();
    var body = document.body;
    var clientTop = element.clientTop || body.clientTop || 0;
    var clientLeft = element.clientLeft || body.clientLeft || 0;
    var scrollTop = getScroll(window, true);
    var scrollLeft = getScroll(window);
    return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
    };
}

export default class Affix extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };
    static defaultProps = {
        hold: true,
        offsetTop: 0,
        offsetBottom: undefined,
        onChange: function() {}
    };
    constructor(props) {
        super(props);
        this.state = {
            holderStyle: null,
            affixStyle: null
        };
        bindArray(this,['handleChange','handleScroll']);
    }
    handleChange() {
        return this.props.onChange(!!this.state.affixStyle);
    }
    handleScroll() {
        const { offsetTop,offsetBottom } = this.props;
        let offset = null;
        
        let affix = !!this.state.affixStyle;
        let scrollTop = getScroll(window, true);
        
        const thisNode = ReactDOM.findDOMNode(this);
        const fixedNode = ReactDOM.findDOMNode(this.refs.fixedNode);
        window.fixedNode = fixedNode;
        let elementOffset = getOffset(thisNode);
        let elementSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        if(typeof offsetBottom != 'number'){
            offset = offsetTop || 0;
            if (!affix && elementOffset.top - offset < scrollTop) {
                this.setState({
                    affixStyle: {
                        position: 'fixed',
                        top: offset,
                        left: elementOffset.left,
                        width: thisNode.offsetWidth
                    },
                    holderStyle: {
                        ...elementSize,
                        visibility: 'hidden'
                    }
                },this.handleChange);
            }
            if (affix && elementOffset.top - offset > scrollTop) {
                this.setState({
                    affixStyle: null
                },this.handleChange);
            }
        }else{
            offset = offsetBottom || 0;

            if (!affix && elementOffset.top + elementSize.height + offsetBottom - window.innerHeight > scrollTop) {
                this.setState({
                    affixStyle: {
                        position: 'fixed',
                        bottom: offset,
                        left: elementOffset.left,
                        width: thisNode.offsetWidth
                    },
                    holderStyle: {
                        ...elementSize,
                        visibility: 'hidden'
                    }
                },this.handleChange);
            }
            if (affix && elementOffset.top + elementSize.height + offsetBottom - window.innerHeight < scrollTop) {
                this.setState({
                    affixStyle: null
                },this.handleChange);
            }
        }
    }
    componentDidMount() {
        this.scrollEvent = DomUtils.addEventListener(window, 'scroll', throttle(this.handleScroll));
        this.resizeEvent = DomUtils.addEventListener(window, 'resize', throttle(this.handleScroll));
    }
    componentWillUnmount() {
        this.scrollEvent && this.scrollEvent.remove();
        this.resizeEvent && this.resizeEvent.remove();
    }
    render() {
        let className = classnames(this.props.className, {
            'affix': !!this.state.affixStyle
        });
        return (
            <div style={{ display: 'inline-block' }}>
                {this.state.affixStyle?
                    <div style={this.state.holderStyle}>&nbsp;</div>
                    : undefined
                }
                <div 
                    ref='fixedNode'
                    className = { className }
                    style = { this.state.affixStyle }
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
