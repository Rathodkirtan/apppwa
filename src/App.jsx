import { useState } from "react";
// Assuming you import './App.css' in your main index.js or App.js file for these styles to work
import './App.css'; 

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    // Create a new todo object for potential future expansion (e.g., done status)
    setTodos([...todos, { text: task, id: Date.now() }]);
    setTask("");
  };

  // Note: We use the item's unique id for deletion instead of index (better practice)
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // Helper for Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
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