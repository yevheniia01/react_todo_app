import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: 'Hello Yevheniia',
      newTodo: '',
      todos: [{
        title: 'learn react',
        done: false
      }, {
        title: 'learn jsx', 
        done: false
      }]
    }
  }
  newTodoChanged(event){
    //console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    })
  }
  formSubmitted(event) {
    event.preventDefault();
    
    this.setState({
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done:false
      }]
    })
  }
  render(){
  return (
    <div className="App">
      <h3>{this.state.message}</h3>
      <form onSubmit={(event)=>this.formSubmitted(event)}>
        <label htmlfor="newTodo">NewTodo</label>
        <input onChange={(event)=>this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo}></input>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {this.state.todos.map(todo=>{
          return <li key={todo.title}>{todo.title}</li>
        })}
      </ul>
    </div>
  );
}
}

export default App;
