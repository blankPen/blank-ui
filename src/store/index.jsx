/*
* @Author: pengzhen
* @Date:   2016-06-29 21:12:01
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-06-30 23:28:57
*/

'use strict';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import reducers from '../reducers/index';

//////////////////////
// Store
const clientMiddleware = function ({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}
//初始化状态
const initialState = {};
//初始化Reducer
const initialReducer = {
    routing
};
//默认中间件
const middlewares = [
    clientMiddleware
];

const enhancer = compose(
    applyMiddleware.apply(this,middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(combineReducers({
    ...reducers,
    ...initialReducer
}), initialState, enhancer);

export default store;
