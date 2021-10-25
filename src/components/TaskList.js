import React from "react";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const TaskList = () => {
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
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="flex justify-between items-center h-8 bg-gray-50 my-2 mx-4 px-4 rounded-lg border shadow-sm">
                <input type="checkbox" onChange={() => handleChange(task.id)}  checked={task.completed}/>
                <p className={`font-semibold text-gray-900 ${(task.completed) ? "line-through" : null}`} >{task.text}</p>
                < MdOutlineDelete className="text-red-500 hover:text-red-700" onClick={() => handleDelete(task.id)} role="button" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
