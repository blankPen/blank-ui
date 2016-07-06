/*
 * @Author: pengzhen
 * @Date:   2016-07-06 14:30:18
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-06 15:27:52
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './index';

var defaultConfig = {
    width: 400,
    onClose: function(){ return true; }
};

function confrim(config) {
    let ret = {};
    config = Object.assign({},defaultConfig,config);


    let container = document.createElement('div');
    document.body.appendChild(container);
    const ConfrimModal = class  extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                open : false
            }
            this.handleClose = this.handleClose.bind(this);
            ret.close = this.handleClose;
        }
        handleClose(){
            this.setState({
                open: config.onClose() === false
            });
        }
        componentDidMount() {
            this.setState({
                open: true
            })
        }
        render() {
            return (
                <Modal
                    {...config}
                    onClose={this.handleClose}
                    onExited={()=>{ document.body.removeChild(container) }}
                    open={this.state.open} 
                >
                    {config.content}
                </Modal>
            )
        }
    }
    ReactDOM.render(<ConfrimModal/>,container);

    return ret;
}

export default confrim;
