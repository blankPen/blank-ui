/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-05 21:17:11
 */

'use strict';
import React from 'react';
import Modal from 'react-material/Modal';
import { RaisedButton } from 'react-material/Button';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=>{
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            <div >
                <RaisedButton onClick={this.handleClick} >Button</RaisedButton>
                <Modal 
                    open={this.state.open} 
                    onClose={this.handleClick}
                    maskClosable={false}
                >
                    <h3>Modal Header</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas esse ducimus veniam eos ex cumque quis, non illum itaque amet distinctio ullam, odit est? Id magni nam vel sit cupiditate.</p>
                    <RaisedButton onClick={this.handleClick} >CLose</RaisedButton>
                </Modal>
            </div>
        );
    }
}

export const title = "Simple Modal";
export const code = 'import React from \'react\';\nimport Modal from \'react-material/Modal\';\nimport { RaisedButton } from \'react-material/Button\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n        this.state = {\n            open: false\n        }\n    }\n    handleClick=()=>{\n        this.setState({\n            open: !this.state.open\n        });\n    }\n    render() {\n        return (\n            <div >\n                <RaisedButton onClick={this.handleClick} >Button</RaisedButton>\n                <Modal \n                    open={this.state.open} \n                    onClose={this.handleClick}\n                    maskClosable={false}\n                >\n                    <h3>Modal Header</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas esse ducimus veniam eos ex cumque quis, non illum itaque amet distinctio ullam, odit est? Id magni nam vel sit cupiditate.</p>\n                    <RaisedButton onClick={this.handleClick} >CLose</RaisedButton>\n                </Modal>\n            </div>\n        );\n    }\n}';
