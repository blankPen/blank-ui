/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 17:20:56
 */

'use strict';
import React from 'react';
import Tabs,{TabItem} from 'react-material/Tabs';

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
            <div>
                <div className="paper" style={{marginBottom: 20}}>
                    <Tabs autoWidth={true} defaultIndex={1}>
                        <TabItem index={1} title='自动宽度 1' />
                        <TabItem index={2} title='自动宽度 2' />
                        <TabItem index={3} title='自动宽度 3' />
                        <TabItem index={4} title='自动宽度 4' />
                        <TabItem index={5} title='自动宽度 5' />
                    </Tabs>
                </div>
                <div className='paper'>
                    <Tabs index={this.state.index} onChange={this.handleChange} >
                        <TabItem index={1} title='可控tab 1' />
                        <TabItem index={2} title='可控tab 2' />
                        <TabItem index={3} title='可控tab 3' />
                        <TabItem index={4} title='可控tab 4' />
                        <TabItem index={5} title='可控tab 5' />
                    </Tabs>
                </div>
            </div>
        );
    }
}

export const title = "Simple Tabs";
export const code = 'import React from \'react\';\nimport Tabs,{TabItem} from \'react-material/Tabs\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n        this.state = {\n            index: 1\n        }\n    }\n    handleChange=(index)=>{\n        this.setState({\n            index \n        });\n    }\n    render() {\n        return (\n            <div>\n                <div className=\"paper\" style={{marginBottom: 20}}>\n                    <Tabs autoWidth={true} defaultIndex={1}>\n                        <TabItem index={1} title=\'自动宽度 1\' />\n                        <TabItem index={2} title=\'自动宽度 2\' />\n                        <TabItem index={3} title=\'自动宽度 3\' />\n                        <TabItem index={4} title=\'自动宽度 4\' />\n                        <TabItem index={5} title=\'自动宽度 5\' />\n                    </Tabs>\n                </div>\n                <div className=\'paper\'>\n                    <Tabs index={this.state.index} onChange={this.handleChange} >\n                        <TabItem index={1} title=\'可控tab 1\' />\n                        <TabItem index={2} title=\'可控tab 2\' />\n                        <TabItem index={3} title=\'可控tab 3\' />\n                        <TabItem index={4} title=\'可控tab 4\' />\n                        <TabItem index={5} title=\'可控tab 5\' />\n                    </Tabs>\n                </div>\n            </div>\n        );\n    }\n}';
