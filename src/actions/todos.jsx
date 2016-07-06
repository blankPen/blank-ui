/*
* @Author: pengzhen
* @Date:   2016-06-29 21:09:43
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-06-30 22:35:31
*/

'use strict';
import store from 'store';
import fetch from 'utils/Fetch';

export async function loadList(){
    store.dispatch({
        type: 'todos/get'
    });
    let res = await fetch('/todo/list');
    store.dispatch({
        type: 'todos/get/success',
        list: res.jsonResult
    });
}
