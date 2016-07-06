/*
* @Author: pengzhen
* @Date:   2016-07-02 17:24:23
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-02 17:24:33
*/

'use strict';

export default function linkFunctions(...funcs) {
    funcs = funcs.filter(f => typeof f === 'function');
    return function(...args) {
        funcs.forEach(f => f.apply(this, args));
    }
}
