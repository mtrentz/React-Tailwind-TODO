import React from 'react'

import { MdOutlineDelete } from "react-icons/md";

const Task = ( {handleChange, handleDelete, task} ) => {
    return (
        <li key={task.id}>
            <div className="flex justify-between items-center h-8 bg-gray-50 my-2 mx-4 px-4 rounded-lg border shadow-sm">
                <input type="checkbox" onChange={() => handleChange(task.id)}  checked={task.completed}/>
                <p className={`font-semibold text-gray-900 truncate mx-4 ${(task.completed) ? "line-through" : null}`} >{task.text}</p>
                < MdOutlineDelete className="text-red-500 hover:text-red-700 flex-shrink-0" onClick={() => handleDelete(task.id)} role="button" />
            </div>
        </li>
    )
}

export default Task
