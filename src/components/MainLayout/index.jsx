/*
* @Author: pengzhen
* @Date:   2016-07-01 01:28:12
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-06 20:58:49
*/

'use strict';
import './index.less';
import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {FlatButton} from 'blank-ui/lib/Button';
import * as DomUtils from 'blank-ui/lib/utils/dom';

let mask = null;

function mapStateToProps({common}) {
    return {
        open_menus: common.open_menus
    };
}

export class MainLayout extends React.Component {

    constructor(props) {
        super(props);
    }
    toggleMenu=()=>{
        this.props.dispatch({
            type: 'toggleMenu'
        })
    }
    setBodyClass(flag){
        var className = document.body.className.replace('open-menu','');
        document.body.className = classnames(className,{
            ['open-menu']: flag
        });
        DomUtils.css(document.body,'overflow',flag?'hidden':null);
    }
    componentDidMount() {
        mask = DomUtils.createElement("<div class='menu-mask'></div>");
        mask.onclick = this.toggleMenu;
        document.body.appendChild(mask);
    }
    render() {
        return (
            <div className='main-layout'>
                <div className={classnames('layout-manus',{
                    open: this.props.open_menus
                })}>
                    {this.props.menus}
                </div>
                <div className='layout-container'>
                    <FlatButton 
                        onClick={this.toggleMenu}
                        className='toggle-menu'>
                        <i className="fa fa-bars"></i>
                    </FlatButton>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(MainLayout)
