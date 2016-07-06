/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-04 20:53:54
 */

'use strict';
import React from 'react';
import IndexLink from 'react-material/IndexLink';
import Affix from 'react-material/Affix';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);
    }

    render() {
        var style = {     
            height: 500,
            background: '#ddd',
            marginBottom: 10
        };
        var data = [
            { ref:'ref1',name: 'name1' },
            { ref:'ref2',name: 'name2' },
            { ref:'ref3',name: 'name3' },
            { ref:'ref4',name: 'name4' }
        ];
        return (
            <div>
                <div style={{float: 'right'}}>
                    <Affix>
                        <IndexLink 
                            parent={this} 
                            data={data}
                        />
                    </Affix>
                </div>
                <div style={{width:'50%'}}>
                    <div ref='ref1' style={style}>1</div>
                    {data.map((link,i)=>{
                        return <div key={i} ref={link.ref} style={style}>这是{link.ref}</div>
                    })}
                </div>
            </div>
        );
    }
}

export const title = "Simple IndexLink";
export const code = 'import React from \'react\';\nimport IndexLink from \'react-material/IndexLink\';\nimport Affix from \'react-material/Affix\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        var style = {     \n            height: 500,\n            background: \'#ddd\',\n            marginBottom: 10\n        };\n        var data = [\n            { ref:\'ref1\',name: \'name1\' },\n            { ref:\'ref2\',name: \'name2\' },\n            { ref:\'ref3\',name: \'name3\' },\n            { ref:\'ref4\',name: \'name4\' }\n        ];\n        return (\n            <div>\n                <div style={{float: \'right\'}}>\n                    <Affix>\n                        <IndexLink \n                            parent={this} \n                            data={data}\n                        />\n                    </Affix>\n                </div>\n                <div style={{width:\'50%\'}}>\n                    <div ref=\'ref1\' style={style}>1</div>\n                    {data.map((link,i)=>{\n                        return <div key={i} ref={link.ref} style={style}>这是{link.ref}</div>\n                    })}\n                </div>\n            </div>\n        );\n    }\n}';
