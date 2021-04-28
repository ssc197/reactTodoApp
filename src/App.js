import React, {Component} from 'react';

import Addtodo from './Addtodo';
import Todos from './Todos'
class App extends Component{
state = {
  todos : [
    {id:1, content:"buy milk"},
    {id:2, content:"buy meat"}
  ]
}

deleteTodo =(id) => {
  const todos = this.state.todos.filter(todo=>{
    return todo.id !==id;
  })
  this.setState({
    todos : todos
  })
  console.log(id)
}

addTodo = (todo) =>{
  todo.id = Math.random();
  let todos = [...this.state.todos, todo];
  this.setState({
    todos:todos
  })
}
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Addtodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
 

export default App;
