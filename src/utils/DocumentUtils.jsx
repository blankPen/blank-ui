/*
* @Author: pengzhen
* @Date:   2016-07-03 20:34:05
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-03 21:00:41
*/

'use strict';
import Animation from './Animation';

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
const DocumentUtils = {

    addEvent: addEvent,
    removeEvent: removeEvent,
    getOffset: function(obj) {  
        var x = 0;
        var y = 0;
        while (obj) {  
            x += obj.offsetLeft;  
            y += obj.offsetTop;  
            obj = obj.offsetParent;  
        }  
        return {
            x: x,
            y: y
        };  
    },
    //滚动条在Y轴上的滚动距离
    getScrollTop: function() {　　
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;　　
        if (document.body) {　　　　
            bodyScrollTop = document.body.scrollTop;　　
        }　　
        if (document.documentElement) {　　　　
            documentScrollTop = document.documentElement.scrollTop;　　
        }　　
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
        return scrollTop;
    },
    //文档的总高度
    getScrollHeight: function() {　　
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;　　
        if (document.body) {　　　　
            bodyScrollHeight = document.body.scrollHeight;　　
        }　　
        if (document.documentElement) {　　　　
            documentScrollHeight = document.documentElement.scrollHeight;　　
        }　　
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
        return scrollHeight;
    },
    //浏览器视口的高度
    getWindowHeight: function() {　　
        var windowHeight = 0;　　
        if (document.compatMode == "CSS1Compat") {　　　　
            windowHeight = document.documentElement.clientHeight;　　
        } else {　　　　
            windowHeight = document.body.clientHeight;　　
        }　　
        return windowHeight;
    },
    //浏览器视口的宽度
    getWindowWidth: function() {
        var windowWidth = 0;　　
        if (document.compatMode == "CSS1Compat") {　　　　
            windowWidth = document.documentElement.clientWidth;　　
        } else {　　　　
            windowWidth = document.body.clientWidth;　　
        }　　
        return windowWidth;
    },
    //滚到到指定位置
    scrollTo: function(position, duration) {
        if (position === 0 || position) {
            duration = duration || 300;
            document.documentElement.scrollTop++;
            document.body.scrollTop++;
            var dom ;
            if(document.documentElement.scrollTop){
                dom = document.documentElement;
            }else if(document.body.scrollTop){
                dom = document.body;
            }
            try{

                var am = new Animation(dom);
                console.log(position)
                am.go({
                    scrollTop: position
                }, duration,Animation.TWEEN.Back.easeOut).start();
            }catch(e){
                console.error(e.name,e.message);
                dom.scrollTop = position;
            }
        }
    }
};
export default DocumentUtils;
