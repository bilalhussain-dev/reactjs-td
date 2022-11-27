import React from 'react'
import {FaTrash} from "react-icons/fa"

function Task({task, deleteItem, id}) {
  return (
    <li className='list-item'>
        <span>{task}</span>
        <span><FaTrash 
               className='icon-delete' 
               onClick={() => {
                  deleteItem(id)
               }}
               /></span>
    </li>
  )
}

export default Task