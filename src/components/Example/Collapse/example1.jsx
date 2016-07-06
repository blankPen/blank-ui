/*
 * @Author: pengzhen
 * @Date:   2016-07-03 16:46:08
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:47
 */

'use strict';
import React from 'react';
import Collapse from 'blank-ui/lib/Collapse';
import { RaisedButton } from 'blank-ui/lib/Button';

export default class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }
    handleClick=()=>{
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div>
                <p><RaisedButton onClick={this.handleClick}>button</RaisedButton></p>
                <Collapse 
                    open={this.state.open}>
                    <div style={{ width:'100%',height: 100,background: '#ddd' }}></div>
                </Collapse>
            </div>
        );
    }
}

export const title = "Simple Example";
export const code = '\nexport default class Example extends React.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            open: true\n        }\n    }\n    handleClick=()=>{\n        this.setState({\n            open: !this.state.open\n        });\n    }\n\n    render() {\n        return (\n            <div>\n                <button onClick={this.handleClick}>button</button>\n                <Collapse \n                    open={this.state.open}>\n                    <div style={{ width:\'100%\',height: 100,background: \'#ddd\' }}></div>\n                </Collapse>\n            </div>\n        );\n    }\n}';
