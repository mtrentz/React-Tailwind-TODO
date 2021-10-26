import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      completed: false,
    },
    {
      id: 2,
      text: "Task 2",
      completed: true,
    },
    {
      id: 3,
      text: "Task 3",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = (task) => {
    // If list empty, id = 1, else, id is one higher than last item
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const taskToAdd = { id, completed: false, text: task };
    const newTaskList = [...tasks, taskToAdd];
    setTasks(newTaskList);
  };

  const handleChange = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="App">
      <Header />
      <TaskList
        tasks={tasks}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
