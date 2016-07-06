/*
 * @Author: pengzhen
 * @Date:   2016-07-01 15:54:24
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-03 20:04:51
 */

'use strict';
import './index.less';
import React from 'react';
import classnames from 'classnames'
import wave from '../Wave';
import Collapse from '../Collapse';


const activeStyles = {
    color: '#ff6768'
}

export default class Menu extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value 
        }
    }

    getValue() {
        return this.props.value || this.state.value;
    }

    handleChange = (menu, value) => {
        if (!this.props.value) {
            this.setState({
                value: value
            });
        }
        this.props.onChange && this.props.onChange(menu, value)
    }
    renderItems(data = []) {
        const current_value = this.getValue();
        let list = [];
        let activeNum = 0;
        list = data.map((menu, i) => {
            let {
                items,
                open
            } = (menu.children && menu.children.length) ? this.renderItems(menu.children): {};
            let currentStyle = {};
            if (current_value !== undefined && current_value === menu.value) {
                activeNum++;
            }
            return (
                <MenuItem 
                    key={i}
                    waveColor={this.props.waveColor}
                    leftIcon={menu.icon}
                    label={menu.label}
                    nestedItems={items}
                    labelTogglesNested={!menu.value}
                    active={current_value !== undefined && current_value === menu.value}
                    onClick={menu.value && this.handleChange.bind(this,menu,menu.value)}
                />
            )
        })
        return {
            items: list,
            open: !!activeNum
        }
    }
    renderMenus(data = []) {
        const current_value = this.getValue();
        return data.map((menu, i) => {
            let {
                items,
                open
            } = (menu.children && menu.children.length) ? this.renderItems(menu.children,1): {};
            return (
                <MenuItem 
                    key={i}
                    waveColor={this.props.waveColor}
                    leftIcon={menu.icon}
                    label={menu.label}
                    nestedItems={items}
                    initiallyOpen={open}
                    labelTogglesNested={!menu.value}
                    active={current_value !== undefined && current_value === menu.value}
                    onClick={menu.value && this.handleChange.bind(this,menu,menu.value)}
                />
            )
        })
    }
    render() {
        if(!this.props.data){
            return (
                <div className={classnames('menu',this.props.className)}>
                    <ul>
                        {this.props.children}   
                    </ul>
                </div>
            )
        }
        const value = this.props.value || this.state.value;
        const data = this.props.data || [];
        return (
            <div className={classnames('menu',this.props.className)}>
                <ul>
                    {this.renderMenus(this.props.data)}    
                </ul>
            </div>
        );
    }
}


export class MenuItem extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };
    static defaultProps = {
        initiallyOpen: false,
        labelTogglesNested: false,
        level: 0
    };
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.initiallyOpen
        };
    }
    handleClick=()=>{
        this.props.onClick && this.props.onClick();
        this.props.labelTogglesNested && this.toggleOpen();
    }
    toggleOpen=()=>{
        if(this.props.nestedItems){
            this.setState({
                open: !this.state.open 
            });
        }
    }
    render() {
        const {
            level,
            label,
            active,
            nestedItems
        } = this.props;

        return (
            <li 
                className={classnames({ 
                    open: this.state.open,
                    active: active
                })}
            >   
                <div className='menu-btn-wrap'>
                    <MenuBtn 
                        level={level} 
                        waveColor={this.props.waveColor}
                        onClick={this.handleClick}>
                        {label}
                    </MenuBtn>
                    {nestedItems && <MenuArrow onClick={this.toggleOpen} wavePosition='center' />}
                </div>
                {nestedItems ?
                    <Collapse 
                        className='menu-list'
                        open={this.state.open}
                        duration={250}>
                        <ul ref='ul'>
                            {nestedItems.map((item,i)=>{
                                return React.cloneElement(item,{
                                    key: i,
                                    level: this.props.level+1
                                })
                            })}
                        </ul>
                    </Collapse>
                    : undefined
                }
            </li>
        );
    }
}
@wave()
export class MenuBtn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a 
                onClick={this.props.onClick}
                className='menu-btn'
                style={{paddingLeft: (1+2*this.props.level)+'em'}}
            >
                {this.props.children}
            </a>
        );
    }
}


@wave({
    position: 'center'
})
export class MenuArrow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a 
                onClick={this.props.onClick}
                className='menu-arrow'
            >
                <i className="fa fa-angle-down"></i>
            </a>
        );
    }
}
