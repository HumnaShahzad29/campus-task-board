import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 101,
      title: "Design My Campus Dashboard",
      category: "Project Work"
    },
    {
      id: 202,
      title: "Review ADC and DAC Notes",
      category: "Electronics"
    },
    {
      id: 303,
      title: "Practice SQL Queries for Lab",
      category: "Database Lab"
    }
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total tasks:", tasks.length);
  }, [tasks]);

  const addTask = () => {
    if (newTitle.trim() === "" || newCategory.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: newTitle,
      category: newCategory
    };

    setTasks([...tasks, newTask]);

    setNewTitle("");
    setNewCategory("");
  };

  return (
    <div>
      <h1>Campus Task Board</h1>

      <input
        type="text"
        placeholder="Enter task title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          category={task.category}
        />
      ))}
    </div>
  );
}

export default App;