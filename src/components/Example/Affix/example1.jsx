/*
 * @Author: pengzhen
 * @Date:   2016-07-04 14:35:19
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:50
 */

'use strict';
import React from 'react';
import Affix from 'blank-ui/lib/Affix';

export default class example1 extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: 500}}>
                <Affix>
                    <div style={{
                        width: 100,
                        height: 100,
                        lineHeight: '100px',
                        textAlign: 'center',
                        background: '#ff6768',
                        color: '#fff'
                    }}>我的固定住的</div>
                </Affix>
            </div>
        );
    }
}

export const title = "Simple Affix";
export const code = 'import Affix from \'blank-ui/lib/Affix\';\n\nexport default class example1 extends React.Component {\n    static propTypes = {\n        name: React.PropTypes.string,\n    };\n\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        return (\n            <div style={{height: 500}}>\n                <Affix>\n                    <div style={{\n                        width: 100,\n                        height: 100,\n                        lineHeight: \'100px\',\n                        textAlign: \'center\',\n                        background: \'#ff6768\',\n                        color: \'#fff\'\n                    }}>我的固定住的</div>\n                </Affix>\n            </div>\n        );\n    }\n}';
