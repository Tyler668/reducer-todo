import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './Todo.css';
import { TodoReducer, initialState } from "./reducers/TodoReducer";

const App = () => {

  const [listItems, setListItems] = useState();
  const [state, dispatch] = useReducer(TodoReducer, initialState);



    return (
      <div className="App">
          <TodoList />
          {/* toggleItem = {this.toggleItem}  listProps = {this.state}  */}
          <TodoForm />
          {/* addItem = {this.addItem} listProps = {this.state} clearPurchased = {this.clearPurchased} */}
      </div>
    );
  }


export default App;



  //  const addItem = (item) =>{
  //    let newState = {};
  //    const newItem = {...item, id: Date.now()};
  //    newState = {data: [...this.state.data, newItem]};
  //    this.setState(newState);
  //   console.log(this.state)
  //  };

  //  const toggleItem = id => {
  //   this.setState({
  //     data: this.state.data.map(item => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         };
  //       } else {
  //         return item;
  //       }
  //     })
  //   });
  // };


  // const clearPurchased = () => {
  //   this.setState({
  //     data: this.state.data.filter(item => !item.completed)
  //   });
  // };