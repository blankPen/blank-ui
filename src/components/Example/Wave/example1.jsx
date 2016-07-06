/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:39:40
 */

'use strict';
import React from 'react';
import wave from 'blank-ui/lib/Wave';

const styles = {
    background: '#ddd',
    width: 200,
    height: 100,
    position: 'relative',
    display: 'inline-block',
    margin: 10
};

@wave()
class Box extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                ...styles,
                background: this.props.color
            }} onClick={()=>{console.log(11)}}></div>
        );
    }
}
export default class example extends React.Component {
 
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Box color="#6ee"></Box>
                <Box waveColor='#6ee' color="#ff6868"></Box> 
            </div>
        );
    }
}

export const title = "Simple Wave";
export const code = 'import React from \'react\';\nimport wave from \'blank-ui/lib/Wave\';\n\nconst styles = {\n    background: \'#ddd\',\n    width: 200,\n    height: 100,\n    position: \'relative\',\n    display: \'inline-block\',\n    margin: 10\n};\n\n@wave()\nclass Box extends React.Component {\n\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        return (\n            <div style={{\n                ...styles,\n                background: this.props.color\n            }} onClick={()=>{console.log(11)}}></div>\n        );\n    }\n}\nexport default class example extends React.Component {\n \n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n\n        return (\n            <div>\n                <Box color=\"#6ee\"></Box>\n                <Box waveColor=\'#6ee\' color=\"#ff6868\"></Box> \n            </div>\n        );\n    }\n}';
