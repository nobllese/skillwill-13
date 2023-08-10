import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text }]);
  };

  const markAsDone = (index) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const deleteTask = (index, isCompletedList) => {
    if (isCompletedList) {
      const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
      setCompletedTasks(updatedCompletedTasks);
    } else {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new task..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
      <div className="lists">
        <div className="todo-list">
          <h2>To-Do</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <span>{task.text}</span>
                <button onClick={() => markAsDone(index)}>Done</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="completed-list">
          <h2>Completed</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index} className="completed-task">
                <span>{task.text}</span>
                <button className="delete-button" onClick={() => deleteTask(index, true)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
