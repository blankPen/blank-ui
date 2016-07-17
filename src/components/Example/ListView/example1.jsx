/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-17 23:32:06
 */

'use strict';
import React from 'react';
import ListView from 'blank-ui/lib/ListView';

export default class example extends React.Component {
 
    constructor(props) {
        super(props);

        var data = [];
        for (var i = 1; i <= 100000; i++) {
            data.push({ id: i, name: 'item '+i });
        }
        this.state = {
            data: data,
            active: null
        }
    }
    handleClick=(item)=>{
        this.setState({
            active: item.id 
        });
    }
    render() {
        var style = {     
            height: 50,
            lineHeight: '50px',
            borderBottom: '1px solid #ddd'
        };
        var activeStyle = {
            ...style,  
            background: '#ddd'
        };
        return (
            <div >
                <ListView 
                    data={this.state.data}
                    child={(item)=>{
                        return <div
                            style={item.id == this.state.active ? activeStyle:style} 
                            onClick={this.handleClick.bind(this,item)} >
                            {item.name}
                        </div>
                    }}
                />
            </div>
        );
    }
}

export const title = "Simple ListView";
export const code = 'import React from \'react\';\nimport ListView from \'blank-ui/lib/ListView\';\n\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n\n        var data = [];\n        for (var i = 1; i <= 100000; i++) {\n            data.push({ id: i, name: \'item \'+i });\n        }\n        this.state = {\n            data: data,\n            active: null\n        }\n    }\n    handleClick=(item)=>{\n        this.setState({\n            active: item.id \n        });\n    }\n    render() {\n        var style = {     \n            height: 50,\n            lineHeight: \'50px\',\n            borderBottom: \'1px solid #ddd\'\n        };\n        var activeStyle = {\n            ...style,  \n            background: \'#ddd\'\n        };\n        return (\n            <div >\n                <ListView \n                    data={this.state.data}\n                    child={(item)=>{\n                        return <div\n                            style={item.id == this.state.active ? activeStyle:style} \n                            onClick={this.handleClick.bind(this,item)} >\n                            {item.name}\n                        </div>\n                    }}\n                />\n            </div>\n        );\n    }\n}';
