/*
 * @Author: pengzhen
 * @Date:   2016-07-01 18:02:15
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 20:33:53
 */

'use strict';
import './index.less';
import React from 'react';

const DEFAULT_DURATION = 0.6;
const DEFAULT_COLOR = 'rgba(0, 0, 0, .15)';
const DEFAULT_ANIM = 'ripple';

function getOffset(obj) {
    var res = {x: 0, y: 0 };
    while (obj) {
        res.x += obj.offsetLeft;
        res.y += obj.offsetTop;
        obj = obj.offsetParent;
    }
    res.x -= window.scrollX;
    res.y -= window.scrollY;
    return res;
}

function createWave(opt){
    
    var duration = opt.duration || DEFAULT_DURATION;
    return function(e){
        if(this.props.disabled){ return; }
        var dom = this.refs.wave;
        var position = this.props.wavePosition;
        var color = this.props.waveColor || DEFAULT_COLOR;
        var anim = this.props.waveAnim || DEFAULT_ANIM;


        var obj = document.createElement("div");
        var size = e.target.clientWidth;
        var { x, y } = getOffset(dom);
        obj.innerHTML = (
            `<div 
                class="wave-ripple" 
                style="
                width:${size}px;
                height:${size}px;
                left:${position == 'center' ? '50%' : (e.clientX - x)+'px'};
                top:${position == 'center' ? '50%' : (e.clientY - y )+'px'};
                background: ${color};
                animation-name: ${anim};
                animation-duration: ${duration}s;"/>`
        );
        obj = obj.childNodes[0];
        dom.appendChild(obj)
        setTimeout(() => {
            dom.removeChild(obj);
        }, duration * 1000)

    }
}
export default function wave(opt = {}) {
    return function(target){
        let render = target.prototype.render;
        target.prototype.render = function() {
            var _this = this;
            var dom = render.call(this);
            let children = [
                dom.props.children,
                <div ref='wave' className='wave' onClick={createWave(opt).bind(_this)}></div>
            ];
            dom = React.cloneElement(dom, {
                children: children
            });
            return dom;
        }
        return target;
    }
}
