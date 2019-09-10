import React, { Component } from "react";
import ReactDOM from "react-dom";
import { random } from "node-forge";
import { TodoReducer, initialState } from "../reducers/TodoReducer";


const TodoForm = () => {

    const [listItems, setListItems] = useState();
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <div className='form-container'>
            <input className="itemField" />
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: document.querySelector('input').value  })}>Add Item to List</button>
            <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed List Items</button>
        </div>
    );


}

export default TodoForm;