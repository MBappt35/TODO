import React, { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}
interface Test {
  text: string;
}

export const TodoList: React.FC<Test> = ({ text }) => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "Learn Typsescript with George", completed: false },
    //{ id: 2, text: "Build Todo List App", completed: false },
  ]);
  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    const newList = todos.filter((x) => x.id !== id);
    console.log(todos);
    setTodos([...newList]);
    console.log(newList);
  };

  return (
    <div className="main-container">
      <h1>Todo List {text}</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <p onClick={() => handleToggle(todo.id)}> {todo.text} </p>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Suppr
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Ajouter une todo"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleClick}>Ajouter</button>
    </div>
  );
};
