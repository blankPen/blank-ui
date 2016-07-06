/*
 * @Author: pengzhen
 * @Date:   2016-07-03 20:53:17
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-04 20:24:37
 */

'use strict';

function css(obj, attr, value) {
    if (value) {
        attr == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")", obj.style[attr] = value / 100) : obj.style[attr] = value;
    } else {
        if (typeof arguments[1] == "object") {
            for (var i in attr) i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + attr[i] + ")", obj.style[i] = attr[i] / 100) : obj.style[i] = attr[i];
        } else {
            return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
        }
    }
};

function getStyle(obj, prop) {
    var style = obj.currentStyle || window.getComputedStyle(obj, '');
    if (prop == 'scrollTop') {
        return obj[prop];
    } else if (obj.style.filter) {
        return obj.style.filter.match(/\d+/g)[0];
    }
    return style[prop];
}

function setStyle(obj, prop, val) {
    switch (prop) {
        case 'scrollTop':
            obj.scrollTop = val;
            break;
        case 'opacity':
            // if($util.client.browser.ie){
            //     obj.style.filter = 'alpha(' + prop + '=' + val*100 + ')'    
            // }else{
            obj.style[prop] = val;
            // }
            break;
        default:
            obj.style[prop] = val + 'px';
            break;
    }
}

/* Animation 动画 */
var Animation = function(obj) {
    this.obj = obj;
    this.frames = 0;
    this.timmer = undefined;
    this.running = false;
    this.ms = [];
    this.onEnd = function(){};
}

Animation.prototype = {
    fps: 60,
    init: function(props, duration, tween) {
        //console.log('初始化');
        this.curframe = 0;
        this.initstate = {};
        this.props = props;
        this.duration = duration || 1000;
        this.tween = tween || function(t, b, c, d) {
            return t * c / d + b;
        };
        this.frames = Math.ceil(this.duration * this.fps / 1000);
        for (var prop in this.props) {
            this.initstate[prop] = {
                from: parseFloat(getStyle(this.obj, prop)),
                to: parseFloat(this.props[prop])
            };
        }
    },
    start: function() {
        if (!this.running && this.hasNext()) {
            //console.log('可以执行...');
            this.ms.shift().call(this)
        }
        return this;
    },
    //开始播放
    play: function(callback) {
        //console.log('开始动画！');
        var that = this;

        this.running = true;

        if (this.timmer) {
            this.stop();
        }

        this.timmer = setInterval(function() {
                if (that.complete()) {
                    that.stop();
                    that.running = false;
                    if (callback) {
                        callback.call(that);
                    }
                    return;
                }
                that.curframe++;
                that.enterFrame.call(that);
            },
            1000 / this.fps);

        return this;
    },
    // 停止动画
    stop: function() {
        //console.log('结束动画！');
        if (this.timmer) {
            clearInterval(this.timmer);
            // 清除掉timmer id
            this.timmer = undefined;
            this.onEnd();
        }

    },
    go: function(props, duration, tween) {
        var that = this;
        //console.log(tween)
        this.ms.push(function() {
            that.init.call(that, props, duration, tween);
            that.play.call(that, that.start);
        });
        return this;
    },
    //向后一帧
    next: function() {
        this.stop();
        this.curframe++;
        this.curframe = this.curframe > this.frames ? this.frames : this.curframe;
        this.enterFrame.call(this);
    },
    //向前一帧
    prev: function() {
        this.stop();
        this.curframe--;
        this.curframe = this.curframe < 0 ? 0 : this.curframe;
        this.enterFrame.call(this);
    },
    //跳跃到指定帧并播放
    gotoAndPlay: function(frame) {
        this.stop();
        this.curframe = frame;
        this.play.call(this);
    },
    //跳到指定帧停止播放
    gotoAndStop: function(frame) {
        this.stop();
        this.curframe = frame;
        this.enterFrame.call(this);
    },
    //进入帧动作
    enterFrame: function() {
        //console.log('进入帧：' + this.curframe)
        var ds;
        for (var prop in this.initstate) {
            var initProp = this.initstate[prop];
            ds = this.tween(this.curframe, initProp['from'], initProp['to'] - initProp['from'], this.frames).toFixed(2);
            // console.log(prop + ':' + ds)
            setStyle(this.obj, prop, ds);
        }
    },
    //动画结束
    complete: function() {
        return this.curframe >= this.frames;
    },
    hasNext: function() {
        return this.ms.length > 0;
    }
}

var Tween = {
    Linear: function(t, b, c, d) {
        return c * t / d + b;
    },
    Quad: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOut: function(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOut: function(t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t, b, c, d, a, p) {
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOut: function(t, b, c, d, a, p) {
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        easeInOut: function(t, b, c, d, a, p) {
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
    },
    Back: {
        easeIn: function(t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOut: function(t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOut: function(t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t, b, c, d) {
            return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
        },
        easeOut: function(t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOut: function(t, b, c, d) {
            if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    }
}
Animation.TWEEN = Tween;

export default Animation;
