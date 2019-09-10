import React, { Component, useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { TodoReducer, initialState } from "../reducers/TodoReducer";


const Todo = (props) => {

    
  const [listItems, setListItems] = useState();
  const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
    <li className =  {`todo${state.completed ? ' completed' : ''}`} onClick = {() => dispatch({type: 'CROSS_ITEM', payload: (props.taskName) })}>{props.taskName}</li>
    );
}
export default Todo;
