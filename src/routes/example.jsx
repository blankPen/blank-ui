/*
* @Author: pengzhen
* @Date:   2016-07-03 18:24:28
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-04 14:52:40
*/

'use strict';
import React from 'react';
import {
    Router,
    Route,
    IndexRoute
} from 'react-router';
import Example from 'components/MainLayout/Example'

let context = require.context('components/Example', true, /example.+\.(js|jsx)$/);
let map = {};

context.keys().forEach((key,i)=>{
    let dir = key.replace('\./','')
    dir = dir.substring(0,dir.indexOf('/'))
    if(dir){
        map[dir] = map[dir] || [];
        map[dir].push(key);
    }
})

let routes = [];
let menuList = [];
for(let prop in map){
    const dir = map[prop];
    const content = dir.map((path,i)=>{
        return context(path);
    });
    const Component = class extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <Example title={prop} content={content}/>
            );
        }
    }
    const path = prop.toLowerCase();
    routes.push(<Route key={prop} path={path} component={Component}></Route>);
    menuList.push({label: prop, value: '/components/' + path});
}

const router = (
    <Route path='components'>
        {routes}
    </Route>
)
export default router;

export const menus = menuList;
