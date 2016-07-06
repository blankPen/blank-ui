/*
 * @Author: pengzhen
 * @Date:   2016-06-29 17:52:48
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-06-29 20:07:12
 */

'use strict';
import {
    handleActions
} from 'redux-actions';

export const stateName = 'todoState';
export default handleActions({
    ['todos/get'](state) {
        return {
            ...state,
            loading: true,
        };
    },
    ['todos/get/success'](state, action) {
        return {
            ...state,
            list: action.list,
            loading: false,
        };
    },
    ['todos/toggleCheck'](state, action) {
        const id = action.id;
        const newList = state.list.map(todo => {
            if (id === todo.id) {
                return {
                    ...todo,
                    checked: !todo.checked
                };
            }else{
                return todo
            }
        });
        return {
            ...state,
            list: newList,
            loading: false,
        };
    },
    ['todos/toggleType'](state, action) {
        return {
            ...state,
            type: action.status,
            loading: false,
        };
    }
}, {
    list: [],
    loading: false,
});
