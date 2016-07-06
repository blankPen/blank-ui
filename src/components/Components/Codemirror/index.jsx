/*
 * @Author: pengzhen
 * @Date:   2016-07-03 15:59:46
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-03 16:05:39
 */

'use strict';
import React from 'react';
import Coder from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';
import './index.less';

export default class Codemirror extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {

        var options = {
            ...this.props.options,
            lineNumbers: true,
            readOnly: true,
            mode: 'jsx'
        }
        return (
            <Coder {...this.props} options={options} />
        );
    }
}
