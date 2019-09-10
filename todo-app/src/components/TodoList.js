import React, { Component } from "react";
import ReactDOM from "react-dom";
import Todo from './Todo';

const TodoList = props => {
    // constructor() { 
    //     super();
    //     this.state = {this.state.listProps}
    
    // }
    
    const list = props.listProps;

   
    return (
        <div className="list-container">
            <ol className="ordered-list">
                {list.data.map(item =>(
                        <Todo  toggleItem = {props.toggleItem} id = {item.id} itemProp = {item.task} isComplete = {item.completed}/>
                ))}
             </ol>
        </div>
    );

}


export default TodoList;