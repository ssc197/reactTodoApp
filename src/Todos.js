import React from "react";

const Todos = ({ todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>{todo.content}
          <span className="right" onClick={()=>{deleteTodo(todo.id)}}><i class="material-icons">delete</i></span>
        </div>
      );
    })
  ) : (
    <p>You have no Todos left out</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
