/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'

function Header({title,count}) {
  return (
    <div className='header'>
        <h3 className="logo">{title}</h3>
        <span className="todos"> 
           { count === 0 ? "Not Listed": count && count >= 10 ? "Cross the limit(10)": count}
        </span>
    </div>
  )
}

export default Header