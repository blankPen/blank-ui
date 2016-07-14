/*
* @Author: pengzhen
* @Date:   2016-07-02 17:24:49
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-09 16:52:48
*/

'use strict';
import Animation from './Animation';
export function css(obj, attr, value) {
    if (value !== undefined) {
        attr == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value*100 + ")", obj.style[attr] = value) : obj.style[attr] = value;
    } else {
        if (typeof arguments[1] == "object") {
            for (var i in attr) i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + attr[i]*100 + ")", obj.style[i] = attr[i]) : obj.style[i] = attr[i];
        } else {
            return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, null)[attr]
        }
    }
};

var addEvent = (function(window, undefined) {
    if (window.addEventListener) {
        return function(el, type, fn, capture) {
            if (type === "mousewheel" && document.mozHidden !== undefined) {
                type = "DOMMouseScroll";
            }
            el.addEventListener(type, fn, capture || false);
        }
    } else if (window.attachEvent) {
        return function(el, type, fn, capture) {
            el.attachEvent("on" + type, fn);
        }
    }else{
        console.error("addEvent 浏览器版本不支持")
    }
})(window);

var removeEvent = (function(window, undefined) {
    if (window.removeEventListener) {
        return function(el, type, fn, capture) {
            if (type === "mousewheel" && document.mozHidden !== undefined) {
                type = "DOMMouseScroll";
            }
            el.removeEventListener(type, fn, capture || false);
        }
    } else if (window.detachEvent) {
        return function(el, type, fn, capture) {
            el.detachEvent("on" + type, fn);
        }
    }else{
        console.error("addEvent 浏览器版本不支持")
    }
})(window);

export function addEventListener(el,type,fn,capture){
    addEvent(el,type,fn,capture)
    return {
        remove: function(){
            removeEvent(el,type,fn,capture)
        }
    }
}

export function getScroll() {
    var w = window;
    var d = w.document;

    var x = w['pageXOffset'];
    var y = w['pageYOffset'];
    if(typeof x !== 'number'){
        x = d.documentElement['scrollLeft'];
        if (typeof x !== 'number') {
            x = d.body['scrollLeft'];
        }
    }
    if(typeof y !== 'number'){
        y = d.documentElement['scrollTop'];
        if (typeof y !== 'number') {
            y = d.body['scrollTop'];
        }
    }
    return {
        top: y,
        left: x
    };
}
export function getOffset(element) {
    var x = 0;
    var y = 0;
    while (element) {
        x += element.offsetLeft;  
        y += element.offsetTop;  
        element = element.offsetParent;  
    }  
    return {
        left: x,
        top: y
    };  
}

export function scrollTo(position, duration,call) {
    if (typeof position === 'number') {
        duration = duration || 300;
        document.documentElement.scrollTop++;
        document.body.scrollTop++;
        var dom ;
        if(document.documentElement.scrollTop){
            dom = document.documentElement;
        }else if(document.body.scrollTop){
            dom = document.body;
        }
        if(!dom){
            call();
            return;
        }
        dom.scrollTop--;

        try{
            var anim = new Animation(dom);
            anim.go({
                scrollTop: position
            }, duration,Animation.TWEEN.Cubic.easeOut).start();
            anim.onEnd = call;
            return anim;
        }catch(e){
            dom.scrollTop = position;
        }
    }
}

export function createElement(str){
    var el = null;
    try{
        el = document.createElement(str);
    }catch(e){
        el = document.createElement('div');
        el.innerHTML = str;
        el = el.childNodes[0];
    }
    return el;
}

export function contains(wrapNode, sonNode) {
    if(wrapNode == sonNode){
        return true;
    }
    // 判断浏览器是否有 contains 方法
    if (typeof wrapNode.contains == 'function') {
        return wrapNode.contains(sonNode);
    } else
    // 判断浏览器是否有 compareDocumentPosition 方法 且 返回值为16 
    // https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition
    if (typeof wrapNode.compareDocumentPosition == 'function') {
        // wrapNode.compareDocumentPosition(sonNode) == 16 
        return !!(wrapNode.compareDocumentPosition(sonNode) & 16);
    } else {
        // 循环查出父节点 是否 等于 wrapNode; 
        var node = sonNode.parentNode;
        do {
            if (node === wrapNode) {
                return true;
            } else {
                node = node.parentNode;
            }
            // null  === document.parentNode
        } while (node !== null);
        return false;
    }
}
