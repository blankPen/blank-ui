/*
* @Author: pengzhen
* @Date:   2016-07-04 14:56:03
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-17 20:40:20
*/

'use strict';
/**
 * [throttle 节流函数]
 * @param  {[type]} handler [被触发方法]
 * @param  {[type]} wait    [wait 毫秒内不会被触发 默认 200]
 * @param  {[type]} mustRun [mustRun 毫秒内一定会触发一次 默认16.7]
 * @return {[type]}         [运行函数]
 */
export default function throttle(handler, wait, mustRun) {
    var timeout,
        lastTime = new Date();
    wait = wait || 200;
    mustRun = mustRun || 16.7; // 默认1000/60，60帧

    return function() {
        var _arguments = arguments;
        var curTime = new Date();
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if(curTime - lastTime >= mustRun){
            handler.apply(this,_arguments);
            lastTime = curTime;
        // 没达到触发间隔，重新设定定时器
        }else{
            timeout = setTimeout(function(){
                handler.apply(this,_arguments);
            }, wait);
        }
    };
};
