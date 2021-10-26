import React from "react";
import { IoSendSharp } from "react-icons/io5";
  
const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <form
      className="flex justify-between mx-4 bg-gray-100 items-center rounded-lg h-10"
      onSubmit={handleSubmit}
    >
      <div className="flex-auto">
        <input
          type="text"
          id="addTask"
          className="ml-2 w-full bg-gray-100 border rounded-lg pl-3"
          placeholder="Add a task..."
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div className="flex-none w-12">
        <button type="submit" ><IoSendSharp className="mx-5"/></button>
      </div>
    </form>
  );
};

export default AddTask;
