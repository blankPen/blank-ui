/*
 * @Author: pengzhen
 * @Date:   2016-07-06 15:51:07
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 17:20:18
 */

'use strict';
import './index.less'
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import * as DomUtils from '../utils/dom';

export default class Tabs extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        onChange: React.PropTypes.func,
        data: React.PropTypes.array,
        autoWidth: React.PropTypes.bool,
        index: React.PropTypes.any
    };
    static defaultProps = {
        autoWidth: false,
        onChange: function(){}
    };
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.defaultIndex
        }
    }
    handleSelect(index) {
        if (!this.props.index) {
            this.setState({
                index
            });
        }
        this.props.onChange(index);
    }
    getLinePosition() {
        let position = {
            left: null,
            right: null
        }
        let tabs = this.refs['tabs'];
        let dom = this.refs[this.getIndex()];
        if (tabs && dom) {
            tabs = ReactDOM.findDOMNode(tabs);
            dom = ReactDOM.findDOMNode(dom);
            position.left = dom.offsetLeft;
            position.right = tabs.clientWidth - (dom.offsetLeft + dom.offsetWidth);
        }
        return position;
    }
    getIndex() {
        return this.props.index === undefined ? this.state.index : this.props.index;
    }
    setLinePosition() {
        let line = this.refs.line && ReactDOM.findDOMNode(this.refs.line);
        if (line) {
            let curLeft = parseInt(DomUtils.css(line, 'left'));

            let nextPos = this.getLinePosition();
            let time = {
                left: nextPos.left - curLeft > 0 ? 300 : 100,
                right: nextPos.left - curLeft > 0 ? 100 : 300,
            }

            DomUtils.css(line, 'transition', `left ${time.left}ms,right ${time.right}ms`);


            DomUtils.css(line, {
                left: nextPos.left + 'px',
                right: nextPos.right + 'px'
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        this.setLinePosition();
    }
    componentDidMount() {
        this.setLinePosition();
    }
    render() {
        let tabs;
        if (this.props.data) {
            tabs = this.props.data.map((tab, key) => {
                return React.createElement(TabItem, {
                    key: tab.index,
                    ref: tab.index,
                    onClick: this.handleSelect.bind(this, tab.index),
                    title: tab.title,
                    style: tab.itemStyle
                })
            });
        } else {
            tabs = this.props.children.filter(tab => {
                return tab.type === TabItem
            });
            tabs = tabs.map(tab => {
                return React.cloneElement(tab, {
                    key: tab.props.index,
                    ref: tab.props.index,
                    onClick: this.handleSelect.bind(this, tab.props.index)
                })
            })
        }
        return (
            <ul ref='tabs'
                className={classnames("tabs",this.props.className,{
                    'tabs-auto-width': this.props.autoWidth
                })} 
            >
                {tabs}
                <div className='tabs-underline' ref='line'></div>
            </ul>
        );
    }
}

export class TabItem extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        onClick: React.PropTypes.func,
        title: React.PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={classnames('tabs-item',this.props.className)} style={this.props.style}>
                <a onClick={this.props.onClick}>{this.props.title}</a>
            </li>
        );
    }
}

Tabs.Item = TabItem;
