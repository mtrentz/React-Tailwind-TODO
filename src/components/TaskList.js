import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleChange, handleDelete }) => {
  return (
    <div>
      {/* Check if there are tasks to show, else, shows paragraph */}
      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleChange={handleChange}
            />
          ))}
        </ul>
      ) : (
        <p class="text-center py-2 text-gray-800"> No remaining tasks </p>
      )}
    </div>
  );
};

export default TaskList;
