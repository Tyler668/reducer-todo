import React, { useReducer } from 'react';
import { initialState, TodoReducer } from '../reducers/TodoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    console.log(state);
    
    
    return (
        
            <div>
                <h1>Todo</h1>
                {state.map(state => {
                    return (
                        <div>
                            <li className = {`${state.completed ? ' completed' : ''}`} onClick={() => dispatch({ type: 'CROSS_ITEM', payload: state.id })}>{state.item}</li>
                        </div>
                    )
                })}
                <div className="formContainer">
                    <input className="itemField" />
                    <button onClick={() => dispatch({ type: 'ADD_TODO', payload: `${ document.querySelector('input').value }`})}>Add Item to List </button>
                    <button onClick = {() => dispatch({ type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
            </div>
        </div>
    )
}
export default TodoList;