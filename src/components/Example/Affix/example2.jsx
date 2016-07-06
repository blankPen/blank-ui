/*
 * @Author: pengzhen
 * @Date:   2016-07-04 14:35:19
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-04 20:57:58
 */

'use strict';
import React from 'react';
import Affix from 'react-material/Affix';

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
                <Affix offsetTop={200}>
                    <div style={{
                        width: 100,
                        height: 100,
                        textAlign: 'center',
                        background: '#ff6768',
                        color: '#fff',
                        display: 'inline-block'
                    }}>距离顶部200px</div>
                </Affix>
                <Affix offsetBottom={200}>
                    <div style={{
                        width: 100,
                        height: 100,
                        textAlign: 'center',
                        background: '#ff6768',
                        color: '#fff',
                        display: 'inline-block'
                    }}>距离底部200px</div>
                </Affix>

            </div>
        );
    }
}

export const title = "Offset Affix";
export const code = 'import React from \'react\';\nimport Affix from \'react-material/Affix\';\n\nexport default class example1 extends React.Component {\n    static propTypes = {\n        name: React.PropTypes.string,\n    };\n\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        return (\n            <div style={{height: 500}}>\n                <Affix offsetTop={200}>\n                    <div style={{\n                        width: 100,\n                        height: 100,\n                        textAlign: \'center\',\n                        background: \'#ff6768\',\n                        color: \'#fff\',\n                        display: \'inline-block\'\n                    }}>距离顶部200px</div>\n                </Affix>\n                <Affix offsetBottom={200}>\n                    <div style={{\n                        width: 100,\n                        height: 100,\n                        textAlign: \'center\',\n                        background: \'#ff6768\',\n                        color: \'#fff\',\n                        display: \'inline-block\'\n                    }}>距离底部200px</div>\n                </Affix>\n\n            </div>\n        );\n    }\n}';
