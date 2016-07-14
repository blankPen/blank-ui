/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-09 15:27:48
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

export const title = "Data Tabs";
export const code = 'import React from \'react\';\nimport Tabs,{TabItem} from \'blank-ui/lib/Tabs\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n        this.state = {\n            index: 1\n        }\n    }\n    handleChange=(index)=>{\n        this.setState({\n            index \n        });\n    }\n    render() {\n        return (\n            <div className=\'paper\'>\n                <Tabs \n                    index={this.state.index} \n                    onChange={this.handleChange}\n                    data = {[\n                        { index:1,title:\'Ttitle 1\' },\n                        { index:2,title:\'Ttitle 2\' },\n                        { index:3,title:\'Ttitle 3\' },\n                        { index:4,title:\'Ttitle 4\' },\n                        { index:5,title:\'Ttitle 5\' }\n                    ]} \n                />\n            </div>\n        );\n    }\n}\n';
