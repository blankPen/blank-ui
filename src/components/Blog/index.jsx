/*
 * @Author: pengzhen
 * @Date:   2016-07-01 15:27:55
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-01 15:28:14
 */

'use strict';
import React from 'react';
import {
    connect
} from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

export class Blog extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>这是我的博客</div>
        );
    }
}

export default connect(
    mapStateToProps,
    // Implement map dispatch to props
)(Blog)
