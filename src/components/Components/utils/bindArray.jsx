/*
* @Author: pengzhen
* @Date:   2016-07-02 18:16:36
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-04 19:35:45
*/

'use strict';
export default function(that,arr){
    if(arr instanceof Array){
        arr.forEach(method => {
            that[method] = (typeof that[method] === 'function' ? that[method].bind(that) : undefined);
        })   
    }
}
