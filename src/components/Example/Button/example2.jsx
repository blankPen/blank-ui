/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:48
 */

'use strict';
import React from 'react';
import {FlatButton} from 'blank-ui/lib/Button';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
    }
    render() {
        var style = {
            margin: 10
        }
        return (
            <div >
                <FlatButton style={style}>DEFAULT</FlatButton>
                <FlatButton style={style} type='primary'>PRIMARY</FlatButton>
                <FlatButton style={style} type='secondary'>SECONDARY</FlatButton>
                <FlatButton style={style} disabled={true} >DISABLED</FlatButton>
            </div>
        );
    }
}

export const title = "Flat Button";
export const code = 'import React from \'react\';\nimport {FlatButton} from \'blank-ui/lib/Button\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n    }\n    render() {\n        var style = {\n            margin: 10\n        }\n        return (\n            <div >\n                <FlatButton style={style}>DEFAULT</FlatButton>\n                <FlatButton style={style} type=\'primary\'>PRIMARY</FlatButton>\n                <FlatButton style={style} type=\'secondary\'>SECONDARY</FlatButton>\n                <FlatButton style={style} disabled={true} >DISABLED</FlatButton>\n            </div>\n        );\n    }\n}';
