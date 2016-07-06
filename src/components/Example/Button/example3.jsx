/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:48
 */

'use strict';
import React from 'react';
import { RaisedButton,FlatButton } from 'blank-ui/lib/Button';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
    }
    render() {
        var style = {
            margin: 10
        }
        return (
            <div>
                <div >
                    <RaisedButton style={style} size='sm' type='primary'>PRIMARY</RaisedButton>
                    <RaisedButton style={style} size='md' type='primary'>PRIMARY</RaisedButton>
                    <RaisedButton style={style} size='lg' type='primary'>PRIMARY</RaisedButton>
                </div>
                <div >
                    <FlatButton style={style} size='sm' type='secondary'>SECONDARY</FlatButton>
                    <FlatButton style={style} size='md' type='secondary'>SECONDARY</FlatButton>
                    <FlatButton style={style} size='lg' type='secondary'>SECONDARY</FlatButton>
                </div>
            </div>
        );
    }
}

export const title = "Button Size";
export const code = 'import React from \'react\';\nimport { RaisedButton,FlatButton } from \'blank-ui/lib/Button\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n    }\n    render() {\n        var style = {\n            margin: 10\n        }\n        return (\n            <div>\n                <div >\n                    <RaisedButton style={style} size=\'sm\' type=\'primary\'>PRIMARY</RaisedButton>\n                    <RaisedButton style={style} size=\'md\' type=\'primary\'>PRIMARY</RaisedButton>\n                    <RaisedButton style={style} size=\'lg\' type=\'primary\'>PRIMARY</RaisedButton>\n                </div>\n                <div >\n                    <FlatButton style={style} size=\'sm\' type=\'secondary\'>SECONDARY</FlatButton>\n                    <FlatButton style={style} size=\'md\' type=\'secondary\'>SECONDARY</FlatButton>\n                    <FlatButton style={style} size=\'lg\' type=\'secondary\'>SECONDARY</FlatButton>\n                </div>\n            </div>\n        );\n    }\n}';
