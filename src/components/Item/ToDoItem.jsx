import React from 'react'
import Check from './Check';
import {FaTrashAlt} from 'react-icons/fa'

const ToDoItem = ({todo, change, remove}) => {
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl 
    bg-gray-700 p-3 w-full '
    >
      <div className='flex items-center'
        onClick={() =>{change(todo.id)}}>
        <Check isCompleted={todo.isCompleted}/>        
      </div>

      <div className={`${todo.isCompleted ? 'line-through' : ''}
        overflow-hidden  w-10/12`}>
        {todo.title}
      </div>

      <div onClick={() =>remove(todo.id)}
        className=''>
        <FaTrashAlt size={24} className='text-pink-500 hover:text-white 
          transition-colors ease-in-out duration-300 justify-end' />
      </div>
      
    </div>
  )
}

export default ToDoItem;