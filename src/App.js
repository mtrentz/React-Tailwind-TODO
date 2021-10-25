import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { useState } from 'react';

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

  const handleChange = (id) => {
      const updatedTasks = tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task)
      setTasks(updatedTasks)
  }

  
  const handleDelete = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id)
    setTasks(remainingTasks)
}


  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} handleChange={handleChange} handleDelete={handleDelete}/>
      <AddTask />
    </div>
  );
}

export default App;
