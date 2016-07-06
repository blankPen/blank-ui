/*
 * @Author: pengzhen
 * @Date:   2016-06-29 17:12:49
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:34:51
 */

'use strict';
import './app.less';
import React from 'react';
import {
    connect
} from 'react-redux';
import MainLayout from 'components/MainLayout';
import Menus from 'components/Menus';


function mapStateToProps(state) {
    return {

    };
}

export class App extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <MainLayout
                menus={<Menus pathname={this.props.location.pathname} />}
                children={this.props.children}
            />
        );
    }
}

export default connect(
    mapStateToProps
)(App)
