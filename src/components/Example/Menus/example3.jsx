/*
 * @Author: pengzhen
 * @Date:   2016-07-01 15:54:53
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:45
 */

'use strict';
import React from 'react';
import Menus,{ MenuItem } from 'blank-ui/lib/Menus';

let data = [{
    label: '一级菜单1',
    value: '1'
}, {
    label: '一级菜单2',
    value: '2'
}, {
    label: '一级菜单3[无value]',
    children: [{
        label: '二级菜单1[有value]',
        value: '31',
        children: [{
            label: '三级菜单1',
            value: '311'
        }]
    },{
        label: '二级菜单2',
        value: '32'
    }]
}]

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
    }

    render() {
        var style = {     
            width: 300,
            boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
        };
        return (
            <div style={style}>
                <Menus data={data} />
            </div>
        );
    }
}

export const title = "Data Menus";
export const code = 'import React from \'react\';\nimport Menus,{ MenuItem } from \'blank-ui/lib/Menus\';\n\nlet data = [{\n    label: \'一级菜单1\',\n    value: \'1\'\n}, {\n    label: \'一级菜单2\',\n    value: \'2\'\n}, {\n    label: \'一级菜单3[无value]\',\n    children: [{\n        label: \'二级菜单1[有value]\',\n        value: \'31\',\n        children: [{\n            label: \'三级菜单1\',\n            value: \'311\'\n        }]\n    },{\n        label: \'二级菜单2\',\n        value: \'32\'\n    }]\n}]\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        var style = {     \n            width: 300,\n            boxShadow: \'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px\'\n        };\n        return (\n            <div style={style}>\n                <Menus data={data} />\n            </div>\n        );\n    }\n}';
