import React from 'react'
import {FaCheck} from 'react-icons/fa'

const Check = ({isCompleted}) => {
  return (
    <div className={`border-2 rounded-xl border-pink-500 w-8 h-8 mr-5
      flex items-center justify-center
      ${isCompleted ? "bg-pink-500" : ''}`}>
      { isCompleted
        &&
        <FaCheck size={18} className='text-gray-700'/>}
    </div>
  )
}

export default Check