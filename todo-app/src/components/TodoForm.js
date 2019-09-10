import React, { Component } from "react";
import ReactDOM from "react-dom";
import { random } from "node-forge";

const TodoForm = (props) => {

    return (
        <div className='form-container'>
            <input  className = "itemField" />
            <button onClick={() => props.addItem({task: `${document.querySelector('input').value}`})}>Add Item to List</button>
            <button onClick = {() =>{props.clearPurchased()}}>Clear Completed List Items</button>
        </div>
    );


}

export default TodoForm;