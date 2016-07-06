/*
 * @Author: pengzhen
 * @Date:   2016-06-29 17:44:41
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-03 16:14:14
 */

'use strict';

const context = require.context('./', false, /\.(js|jsx)$/);
const keys = context.keys().filter(item => {
    return item !== './index.js' && item !== './index.jsx'
});

const reducers = keys.reduce((memo, key) => {
    const content = context(key);
    memo[content.stateName || key.match(/([^\/]+)\.(js|jsx)$/)[1]] = content.default;
    return memo;
}, {});
export default reducers;
