/*
 * @Author: pengzhen
 * @Date:   2016-06-29 18:54:58
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-06-29 20:43:18
 */

'use strict';
import fetch from 'isomorphic-fetch';

const errorMessages = (res) => `${res.status} ${res.statusText}`;

function check401(res) {
    if (res.status === 401) {
        location.href = '/401';
    }
    return res;
}

function check404(res) {
    if (res.status === 404) {
        return Promise.reject(errorMessages(res));
    }
    return res;
}

function jsonParse(res) {
    return res.json().then(jsonResult => {
        return {
            ...res,
            jsonResult
        }
    });
}


function xFetch(url, options) {
    // const opts = {...options
    // };

    return fetch('/api'+url, options)
        .then(check401)
        .then(check404)
        .then(jsonParse);
}

export default xFetch;
