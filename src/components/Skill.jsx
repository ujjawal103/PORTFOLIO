import React from 'react'

const Skill = ({logo , name}) => {
  return (
    <div>
        <img src={logo} alt="name" />
        <p>{name}</p>
    </div>
  )
}

export default Skill
