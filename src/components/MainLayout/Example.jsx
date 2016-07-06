/*
 * @Author: pengzhen
 * @Date:   2016-07-01 17:51:18
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 20:42:15
 */

'use strict';
import './example.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Codemirror from 'blank-ui/lib/Codemirror';
import wave from 'blank-ui/lib/Wave';
import Collapse from 'blank-ui/lib/Collapse';
import Affix from 'blank-ui/lib/Affix';
import IndexLink from 'blank-ui/lib/IndexLink';
import DocumentUtils from 'utils/DocumentUtils';


export default class Example extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            waveColor: this.randomColor()
        }
    }
    changeColor = () => {
        this.setState({
            waveColor: this.randomColor()
        });
    }
    randomColor() {
        return "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
    }
    render() {
        let links = [];
        let content = this.props.content;
        if (content) {
            content = content.map((obj, i) => {
                const {
                    title,
                    code
                } = obj;
                const Component = obj.default;
                const ref = 'example_' + i;
                links.push({
                    ref: ref,
                    name: title
                })
                return (
                    <ExampleCode
                        key={i}
                        ref={ref}
                        title={title}
                        code={code}
                    >
                        <Component/>
                    </ExampleCode>
                )
            })
        }
        return (
            <div className="components-example">
                
                <TopNav 
                    title={this.props.title} 
                    waveAnim={'exampleAnim'}
                    waveColor={this.state.waveColor} 
                    onClick={this.changeColor}
                />
                <div className="main container">
                    <div className="left-col">
                        {content}
                    </div>
                    <div className="right-col">
                        <Affix className='right-content'>
                            {/*<GitBox></GitBox>*/}
                            <IndexLink parent={this} data={links}/>
                        </Affix>
                    </div>
                </div>
            </div>
        );
    }
}

class GitBox extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="git-box">
                <iframe 
                    src="https://ghbtns.com/github-btn.html?user=blankPenz&repo=blank-ui/lib&type=watch&count=true&size=large&v=2" 
                    frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
                <iframe 
                    src="https://ghbtns.com/github-btn.html?user=blankPenz&repo=blank-ui/lib&type=star&count=true&size=large" 
                    frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>

                <iframe 
                    src="https://ghbtns.com/github-btn.html?user=blankPenz&repo=blank-ui/lib&type=fork&count=true&size=large" 
                    frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            </div>
        );
    }
}

@wave()
export class TopNav extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="top-nav" onClick={this.props.onClick}>
                <div className="container">
                    <h1 className="title">{this.props.title}</h1>
                    
                </div>
            </div>
        );
    }
}

export class ExampleCode extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }
    render() {
        return (
            <div className='example-coder'>
                {/*<h2 className='example-title'>{this.props.title}</h2>
                {this.props.desc && <p className="example-desc">{this.props.desc}</p>}*/}
                <div className='code-box'>
                    <div 
                        className='code-header' 
                        onClick={()=>{ this.setState({
                            open: !this.state.open
                        }); 
                    }} >
                        {this.props.title} <span className='right-btn'><i className="fa fa-code"></i></span>
                    </div>
                    {
                        this.props.code &&
                        <Collapse className='code-text' unmountOnExit={true} open={this.state.open}>
                            <div style={{maxHeight: 300,overflow: 'auto'}}>
                                <Codemirror value={this.props.code} />
                            </div>
                        </Collapse>
                    }
                    <div className="code-example">
                        {this.props.children}
                    </div>
                </div> 
            </div>
        );
    }
}
