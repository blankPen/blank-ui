/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-14 15:45:38
 */

'use strict';
import React from 'react';
import Popover from 'blank-ui/lib/Popover';
import { RaisedButton,FlatButton } from 'blank-ui/lib/Button';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }
    handleChange=(index)=>{
        this.setState({
            index 
        });
    }
    render() {
        const content = (
            <div>
                <FlatButton style={{width: '100%'}}>Button 1</FlatButton>
                <FlatButton style={{width: '100%'}}>Button 2</FlatButton>
                <FlatButton style={{width: '100%'}}>Button 3</FlatButton>
                <FlatButton style={{width: '100%'}}>Button 4</FlatButton>
            </div>
        )
        return (
            <div>
                
                <div style={{width: '33%',display:'inline-block'}}>
                    <Popover content={content}>
                        <RaisedButton>Button</RaisedButton>
                    </Popover>
                </div>

                <div style={{width: '33%',display:'inline-block'}}>
                    <Popover trigger='hover' content={content}>
                        <RaisedButton>Button</RaisedButton>
                    </Popover>
                </div>

                <div style={{width: '33%',display:'inline-block'}}>
                    <Popover trigger='focus' content={content}>
                        <RaisedButton>Button</RaisedButton>
                    </Popover>
                </div>
            </div>
        );
    }
}

export const title = "Simple Popover";
export const code = 'import React from \'react\';\nimport Popover from \'blank-ui/lib/Popover\';\nimport { RaisedButton,FlatButton } from \'blank-ui/lib/Button\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n        this.state = {\n            index: 1\n        }\n    }\n    handleChange=(index)=>{\n        this.setState({\n            index \n        });\n    }\n    render() {\n        const content = (\n            <div>\n                <FlatButton style={{width: \'100%\'}}>Button 1</FlatButton>\n                <FlatButton style={{width: \'100%\'}}>Button 2</FlatButton>\n                <FlatButton style={{width: \'100%\'}}>Button 3</FlatButton>\n                <FlatButton style={{width: \'100%\'}}>Button 4</FlatButton>\n            </div>\n        )\n        return (\n            <div>\n                \n                <div style={{width: \'33%\',display:\'inline-block\'}}>\n                    <Popover content={content}>\n                        <RaisedButton>Button</RaisedButton>\n                    </Popover>\n                </div>\n\n                <div style={{width: \'33%\',display:\'inline-block\'}}>\n                    <Popover trigger=\'hover\' content={content}>\n                        <RaisedButton>Button</RaisedButton>\n                    </Popover>\n                </div>\n\n                <div style={{width: \'33%\',display:\'inline-block\'}}>\n                    <Popover trigger=\'focus\' content={content}>\n                        <RaisedButton>Button</RaisedButton>\n                    </Popover>\n                </div>\n            </div>\n        );\n    }\n}\n';
