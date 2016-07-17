/*
 * @Author: pengzhen
 * @Date:   2016-07-03 19:50:30
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-07-17 23:11:16
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

export const title = "Simple IndexLink";
export const code = 'import React';
