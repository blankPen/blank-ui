import React from 'react';

export default class Test extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Coder></Coder>
            </div>
        );
    }
}
var Codemirror = require('react-codemirror');

var Coder = React.createClass({
    getInitialState: function() {
        return {
            code: ""
        };
    },
    updateCode: function(newCode) {

        var code = newCode;
        code = code.replace(/\n/g, '\\n')
        code = code.replace(/'/g, '\\\'');
        code = code.replace(/"/g, '\\\"');

        this.setState({
            code: newCode,
            pre_code: 'export const code = \''+code+'\';'
        });
        this.replaceCode();
    },
    render: function() {
        var options = {
            lineNumbers: true
        };
        return (
            <div>
                <input type="text" style={{width: 300}} value={this.state.pre_code} />
                <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
            </div>
        )
    }
});

