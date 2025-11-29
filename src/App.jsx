import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  // Load from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = { text: task, id: Date.now() };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTodo();
  };

  
  return (
    <div className="todo-container">
      <h2>📝 Simple Todo App</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          className="task-input"
        />

        <button onClick={addTodo} className="add-button">
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((item) => (
          <li key={item.id} className="todo-item">
            <span className="todo-text">{item.text}</span>
            <button
              onClick={() => deleteTodo(item.id)}
              className="delete-button"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
