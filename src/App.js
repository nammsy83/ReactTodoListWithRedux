import React, { Component } from 'react';
import './App.css';
import CreateTodo from './components/create-todo';
import TodoList from './components/todo-list';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
