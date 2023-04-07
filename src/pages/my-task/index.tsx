import React, { useState } from 'react'
import AddEditTask from './add-edit-task'
import TaskDisplay from './task-display'

const MyTask: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [currentData, setCurrentData] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [tasks, setTasks] = useState([])

  const onCreate = () => {
    setIsEdit(false)
    setShowForm(true)
  }

  const onEdit = data => {
    setCurrentData(data)
    setIsEdit(true)
    setShowForm(true)
  }

  const processEdit = data => {
    const newTasksArr = tasks.map(item => {
      if (item.id === data.id) return data
      return item
    })
    setTasks(newTasksArr)
  }

  const processCreate = data => {
    const params = { id: crypto.randomUUID(), ...data }
    const newTasksArr = [...tasks, params]
    setTasks(newTasksArr)
  }

  const processDelete = id => {
    const newTasksArr = tasks.filter(item => item.id !== id)
    setTasks(newTasksArr)
  }

  const onCancel = () => {
    setIsEdit(false)
    setShowForm(false)
  }

  const processSubmit = data => {
    if (data.id) processEdit(data)
    else processCreate(data)
    onCancel()
  }

  return (
    <>
      {showForm && (
        <AddEditTask
          currentData={currentData}
          isEdit={isEdit}
          onSubmit={processSubmit}
          onCancel={onCancel}
        />
      )}
      <div>
        <button onClick={onCreate}>Add New</button>
      </div>
      {tasks.map((task, index) => (
        <TaskDisplay
          key={index}
          task={task}
          onEdit={onEdit}
          onDelete={processDelete}
        />
      ))}
    </>
  )
}

export default MyTask
