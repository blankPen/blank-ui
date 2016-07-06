/*
 * @Author: pengzhen
 * @Date:   2016-06-29 17:12:49
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-01 22:31:43
 */

'use strict';
import './app.less';
import React from 'react';
import {
    connect
} from 'react-redux';
import * as colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MainLayout from 'components/MainLayout';
import Menus from 'components/Menus';

const muiTheme = getMuiTheme({
   
});

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
            <MuiThemeProvider>
                <MainLayout
                    menus={<Menus pathname={this.props.location.pathname} />}
                    children={this.props.children}
                />
            </MuiThemeProvider>
        );
    }
}

export default connect(
    mapStateToProps
)(App)
