import React from "react";

function Todo({ todo, index }) {
  return (
    <div className="todo-item" key={index}>
      {todo.text}
    </div>
  );
}

export default Todo;
