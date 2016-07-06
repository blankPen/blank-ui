/*
 * @Author: pengzhen
 * @Date:   2016-06-29 18:32:01
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-06-29 21:25:45
 */

'use strict';
import React from 'react';
import {
    connect
} from 'react-redux';
import { loadList } from 'actions/todos';
import Todo from './Todo';

function filter(state){
    var newList = [];
    if(state.type == 'Todo'){
        state.list.forEach((todo)=>{
            if(!todo.checked){
                newList.push(todo);
            }
        })
    }else if(state.type == 'Finish'){
        state.list.forEach((todo)=>{
            if(todo.checked){
                newList.push(todo);
            }
        })
    }else{
        return state;
    }
    return {
        ...state,
        list: newList
    };
}

function mapStateToProps({ todoState }) {
    return {
        todos: filter(todoState)
    };
}


export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        loadList.call(this)
    }
    hanldeChange(id){
        this.props.dispatch({
            type: 'todos/toggleCheck',
            id: id
        })
    }
    toggleType(type){
        this.props.dispatch({
            type: 'todos/toggleType',
            status: type
        })
    }
    renderList() {
        const { list = [],loading } = this.props.todos;
        if(loading){
            return <div>loading...</div>
        }
        return list.map((item = {}, i) => {
            return <Todo key={i} {...item} onChange={this.hanldeChange.bind(this,item.id)} />
        })
    }
    render() {
        return (
            <div>
                <h2>TodoList</h2>
                <div>
                    <button onClick={this.toggleType.bind(this,'All')}>All</button>
                    <button onClick={this.toggleType.bind(this,'Todo')}>Todo</button>
                    <button onClick={this.toggleType.bind(this,'Finish')}>Finish</button>
                </div>
                {this.renderList()}
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(TodoList)
