/*
 * @Author: pengzhen
 * @Date:   2016-07-01 18:03:11
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-02 22:04:33
 */

'use strict';
import React from 'react';
import Example,{ExampleCode} from 'components/MainLayout/Example';
import wave from './index.jsx';

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
    static propTypes = {
        name: React.PropTypes.string,
    };

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
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Example title='Wave'>
                <ExampleCode
                    title='Simple Wave'
                    code='xxxx'
                >
                    <Box color="#6ee"></Box>
                </ExampleCode>
                <ExampleCode
                    title='Color Wave'
                    code='xxxx'
                >
                    <Box waveColor='#6ee' color="#ff6868"></Box>    
                </ExampleCode>
            </Example>
        );
    }
}
