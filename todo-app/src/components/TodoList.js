import React, { Component,  useState, useReducer } from "react";
import ReactDOM from "react-dom";
import Todo from './Todo';
import { TodoReducer, initialState } from "../reducers/TodoReducer";


const TodoList = () => {
    // constructor() { 
    //     super();
    //     this.state = {this.state.listProps}

    // }
    const [listItems, setListItems] = useState();
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const list = state.todos;


    return (
        <div className="list-container">
            <ol className="ordered-list">
                {list.map(item => (
                    <Todo taskName = {item.task} />
                    // toggleItem={props.toggleItem} id={item.id} itemProp={item.task} isComplete={item.completed}
                ))}
            </ol>
        </div>
    );

}


export default TodoList;