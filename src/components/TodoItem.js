import React from 'react'

function TodoItem({ todo, index, onDelete }) {
  return (
    <li className='flex items-center w-[50rem] justify-between bg-gray-800 p-2 rounded gap-4 '>
      <input
        type="checkbox" class="checkbox checkbox-accent"
      />
      <span class="label-text">{todo}</span>
      <button onClick={() => onDelete(index)} className='btn btn-error text-white '>Delete</button>
    </li>
  )
}

export default TodoItem