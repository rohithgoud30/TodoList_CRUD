import React from 'react'

const Task = (props) => {
  return (
    <div
      className='task'
      style={{ backgroundColor: props.task.isComplete ? 'green' : 'white' }}
    >
      <h1>{props.task.name}</h1>
      <button onClick={() => props.completeTask(props.task.id)}>
        Complete
      </button>
      <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
    </div>
  )
}

export default Task
