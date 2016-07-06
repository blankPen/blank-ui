/*
 * @Author: pengzhen
 * @Date:   2016-06-29 18:31:50
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-06-29 19:53:49
 */

'use strict';
import './todo.less';
import React from 'react';
import classnames from 'classnames'

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.checked ? 'todo-active':'todo-normal'}>
                <input 
                    type="checkbox" 
                    checked={!!this.props.checked}
                    onChange={this.props.onChange}
                />
                <span>{this.props.label}</span>
            </div>
        );
    }
}
