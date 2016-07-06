/*
* @Author: pengzhen
* @Date:   2016-07-01 01:28:12
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-05 22:18:47
*/

'use strict';
import './index.less';
import React from 'react';
import classnames from 'classnames';
import {FlatButton} from 'react-material/Button';
import * as DomUtils from 'react-material/utils/dom';

let mask = null;
export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        }
    }
    toggleMenu=()=>{
        this.setState({
            openMenu: !this.state.openMenu
        },()=>{
            this.setBodyClass(this.state.openMenu)
        });
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
        this.setBodyClass(this.state.openMenu);
    }
    render() {
        return (
            <div className='main-layout'>
                <div className={classnames('layout-manus',{
                    open: this.state.openMenu
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
