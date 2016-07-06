/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:43
 */

'use strict';
import React from 'react';
import Modal from 'blank-ui/lib/Modal';
import { RaisedButton } from 'blank-ui/lib/Button';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
        
    }
    handleClose=()=>{
        this.confrim && this.confrim.close();
    }
    handleClick=()=>{
        if(!this.confrim){
            this.confrim = Modal.confrim({
                onClose: ()=>{
                    this.confrim = null;
                },
                content: (
                    <div>
                        <h3>Modal Header</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas esse ducimus veniam eos ex cumque quis, non illum itaque amet distinctio ullam, odit est? Id magni nam vel sit cupiditate.</p>
                        <RaisedButton onClick={this.handleClose} >CLose</RaisedButton>
                    </div>
                )
            })   
        }
    }
    render() {
        return (
            <div >
                <RaisedButton onClick={this.handleClick} >Button</RaisedButton>
            </div>
        );
    }
}

export const title = "Confrim Modal";
export const code = 'import React from \'react\';\nimport Modal from \'blank-ui/lib/Modal\';\nimport { RaisedButton } from \'blank-ui/lib/Button\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n        \n    }\n    handleClose=()=>{\n        this.confrim && this.confrim.close();\n    }\n    handleClick=()=>{\n        if(!this.confrim){\n            this.confrim = Modal.confrim({\n                onClose: ()=>{\n                    this.confrim = null;\n                },\n                content: (\n                    <div>\n                        <h3>Modal Header</h3>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas esse ducimus veniam eos ex cumque quis, non illum itaque amet distinctio ullam, odit est? Id magni nam vel sit cupiditate.</p>\n                        <RaisedButton onClick={this.handleClose} >CLose</RaisedButton>\n                    </div>\n                )\n            })   \n        }\n    }\n    render() {\n        return (\n            <div >\n                <RaisedButton onClick={this.handleClick} >Button</RaisedButton>\n            </div>\n        );\n    }\n}';
