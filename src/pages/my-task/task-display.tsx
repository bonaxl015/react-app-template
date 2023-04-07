import React from 'react'

const TaskDisplay = props => {
  const { task, onEdit, onDelete } = props

  const editData = () => {
    onEdit(task)
  }

  const deleteData = () => {
    onDelete(task.id)
  }

  return (
    <div>
      <h4>{task.name}</h4>
      <p>{task.description}</p>
      <button onClick={editData}>Edit</button>
      <button onClick={deleteData}>Delete</button>
    </div>
  )
}

export default TaskDisplay
