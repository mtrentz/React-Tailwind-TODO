import React from 'react'
import { IoSendSharp } from 'react-icons/io5'

const AddTask = () => {
    return (
        <div className="flex justify-between mx-4 bg-gray-200 items-center rounded-lg h-9">
            <div className="flex-auto">
                <input
                    type="text" 
                    className="ml-2 w-full bg-gray-200 border border-gray-300 rounded-md pl-2"
                    placeholder="Add a task..."
                    />    
            </div>
            <div className="flex-none w-12">
            < IoSendSharp className="mx-5" role="button" type="submit"/>
            </div>
        </div>
    )
}

export default AddTask
