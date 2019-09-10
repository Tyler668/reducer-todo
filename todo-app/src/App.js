import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './Todo.css';

class App extends React.Component {
  // 'C' declare your 'CLASS'




   addItem = (item) =>{
     let newState = {};
     const newItem = {...item, id: Date.now()};
     newState = {data: [...this.state.data, newItem]};
     this.setState(newState);
    console.log(this.state)
   };

   toggleItem = id => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };


  clearPurchased = () => {
    this.setState({
      data: this.state.data.filter(item => !item.completed)
    });
  };



  render() {
    // 'R' don't forget to call 'RENDER'
    return (
      <div className="App">
          <TodoList toggleItem = {this.toggleItem}  listProps = {this.state} />
          <TodoForm addItem = {this.addItem} listProps = {this.state} clearPurchased = {this.clearPurchased}/>
      </div>
    );
  }
}

export default App;