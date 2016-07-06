/*
 * @Author: pengzhen
 * @Date:   2016-07-06 17:22:43
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 17:34:32
 */

'use strict';
import './index.less';
import React from 'react';
import {
    connect
} from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

export class Home extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='page'>
                <header>
                    <div className="text-box">
                        <h1>Getting Started</h1>
                        <h4>Learn how to start using Blank-UI in your website.</h4>
                    </div>
                    <div className="card-box">

                    </div>
                </header>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    // Implement map dispatch to props
)(Home)
