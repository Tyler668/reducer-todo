import React, { Component } from "react";
import ReactDOM from "react-dom";

const Todo = props => {
    return (
    <li className =  {`todo${props.isComplete ? ' completed' : ''}`} onClick = {() => props.toggleItem(props.id)} >{props.itemProp}</li>
    );
}
export default Todo;
