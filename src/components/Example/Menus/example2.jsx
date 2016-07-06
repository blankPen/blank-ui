/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:45
 */

'use strict';
import React from 'react';
import Menus,{ MenuItem } from 'blank-ui/lib/Menus';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
    }

    render() {
        var style = {     
            width: 200,
            boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
        };
        return (
            <div style={style}>
                <Menus>
                    <MenuItem label='Options 1' />
                    <MenuItem label='Options 2' />
                    <MenuItem label='Options 3' />
                    <MenuItem 
                        label='Options 4' 
                        nestedItems={[
                            <MenuItem key={1} label='Nested 1' />,
                            <MenuItem key={2} label='Nested 2' />,
                            <MenuItem key={3} label='Nested 3' />
                        ]}
                    />
                </Menus>
            </div>
        );
    }
}

export const title = "Nested Menus";
export const code = 'import React from \'react\';\nimport Menus,{ MenuItem } from \'blank-ui/lib/Menus\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        var style = {     \n            width: 200,\n            boxShadow: \'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px\'\n        };\n        return (\n            <div style={style}>\n                <Menus>\n                    <MenuItem label=\'Options 1\' />\n                    <MenuItem label=\'Options 2\' />\n                    <MenuItem label=\'Options 3\' />\n                    <MenuItem \n                        label=\'Options 4\' \n                        nestedItems={[\n                            <MenuItem key={1} label=\'Nested 1\' />,\n                            <MenuItem key={2} label=\'Nested 2\' />,\n                            <MenuItem key={3} label=\'Nested 3\' />\n                        ]}\n                    />\n                </Menus>\n            </div>\n        );\n    }\n}';
