/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:41
 */

'use strict';
import React from 'react';
import Tabs,{TabItem} from 'blank-ui/lib/Tabs';

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
        return (
            <div className='paper'>
                <Tabs 
                    index={this.state.index} 
                    onChange={this.handleChange}
                    data = {[
                        { index:1,title:'Ttitle 1' },
                        { index:2,title:'Ttitle 2' },
                        { index:3,title:'Ttitle 3' },
                        { index:4,title:'Ttitle 4' },
                        { index:5,title:'Ttitle 5' }
                    ]} 
                />
            </div>
        );
    }
}

export const title = "Data Tabs";
export const code = 'import React from \'react\';\nimport Tabs,{TabItem} from \'blank-ui/lib/Tabs\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n        this.state = {\n            index: 1\n        }\n    }\n    handleChange=(index)=>{\n        this.setState({\n            index \n        });\n    }\n    render() {\n        return (\n            <div className=\'paper\'>\n                <Tabs \n                    index={this.state.index} \n                    onChange={this.handleChange}\n                    data = {[\n                        { index:1,title:\'Ttitle 1\' },\n                        { index:2,title:\'Ttitle 2\' },\n                        { index:3,title:\'Ttitle 3\' },\n                        { index:4,title:\'Ttitle 4\' },\n                        { index:5,title:\'Ttitle 5\' }\n                    ]} \n                />\n            </div>\n        );\n    }\n}\n';
