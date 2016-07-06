/*
 * @Author: pengzhen
 * @Date:   2016-07-04 14:59:18
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 14:20:36
 */

'use strict';

function regist(name, func) {
    window[name] = window[name] || func;
}
Object.assign = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
