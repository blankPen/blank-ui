/*
* @Author: pengzhen
* @Date:   2016-07-06 20:45:17
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-07-06 20:57:12
*/

'use strict';
import {
    handleActions
} from 'redux-actions';
import classnames from 'classnames';
import * as DomUtils from 'blank-ui/lib/utils/dom';

export const stateName = 'common';
export default handleActions({
    ['toggleMenu'](state,action) {
        var flag = action.flag !== undefined ? action.flag : !state.open_menus;
        var className = document.body.className.replace('open-menu','');
        document.body.className = classnames(className,{
            ['open-menu']: flag
        });
        DomUtils.css(document.body,'overflow',flag?'hidden':null);
        return {
            ...state,
            open_menus: flag
        };
    }
},{
    open_menus: false
});
