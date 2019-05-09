import React, { useState } from "react";
import "./App.css";

import Todo from "./Todo";

function App() {
  const [todos, setTodo] = useState([
    {
      text: "First TODO"
    },
    {
      text: "Second TODO"
    }
  ]);
  const [textValue, setValue] = useState("");

  const addTodo = e => {
    e.preventDefault();
    if (!textValue) return;

    setTodo([...todos, { text: textValue }]);
    setValue("");
  };

  return (
    <div className="App">
      <div className="header">TODO list</div>
      <div className="todos">
        {todos.map((todo, i) => {
          return <Todo todo={todo} index={i} key={i} />;
        })}
      </div>
      <div className="todo-form">
        <form onSubmit={addTodo}>
          <input
            className="input"
            placeholder="Enter a new TODO"
            value={textValue}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
