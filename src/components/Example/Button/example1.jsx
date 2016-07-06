/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 21:16:13
 */

'use strict';
import React from 'react';
import {RaisedButton} from 'react-material/Button';

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
                <RaisedButton style={style}>DEFAULT</RaisedButton>
                <RaisedButton style={style} type='primary'>PRIMARY</RaisedButton>
                <RaisedButton style={style} type='secondary'>SECONDARY</RaisedButton>
                <RaisedButton style={style} disabled={true} >DISABLED</RaisedButton>
            </div>
        );
    }
}

export const title = "Raised Button";
export const code = 'import React from \'react\';\nimport {RaisedButton} from \'react-material/Button\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n    }\n    render() {\n        var style = {\n            margin: 10\n        }\n        return (\n            <div >\n                <RaisedButton style={style}>DEFAULT</RaisedButton>\n                <RaisedButton style={style} type=\'primary\'>PRIMARY</RaisedButton>\n                <RaisedButton style={style} type=\'secondary\'>SECONDARY</RaisedButton>\n                <RaisedButton style={style} disabled={true} >DISABLED</RaisedButton>\n            </div>\n        );\n    }\n}';
