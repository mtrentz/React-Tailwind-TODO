import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleChange, handleDelete }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task task={task} handleDelete={handleDelete} handleChange={handleChange} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
