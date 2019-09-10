import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import TodoList from './components/TodoList';
import './Todo.css';
import { TodoReducer, initialState } from "./reducers/TodoReducer";

const App = () => {

  const [listItems, setListItems] = useState();
  const [state, dispatch] = useReducer(TodoReducer, initialState);



    return (
      <div className="App">
          <TodoList />
      </div>
    );
  }


export default App;


