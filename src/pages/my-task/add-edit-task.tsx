import React, { useRef, useEffect } from 'react'

const AddEditTask = props => {
  const { isEdit, currentData, onSubmit, onCancel } = props
  const formRef = useRef(null)

  useEffect(() => {
    const initialValues = {
      name: currentData.name,
      description: currentData.description
    }
    if (isEdit) {
      const formElements = [...formRef.current.elements].filter(
        element => element.nodeName === 'INPUT'
      )
      const formWithValue = formElements.map(item => {
        if (item.name in initialValues) {
          item.value = initialValues[item.name]
        }
      })
      console.log(formWithValue)
    }
  }, [])

  const getFormData = () => {
    const formElements = [...formRef.current.elements].filter(
      element => element.nodeName === 'INPUT'
    )
    const formInputs = formElements.reduce(
      (obj, item) => ({
        ...obj,
        [item.name]: item.value
      }),
      {}
    )
    return formInputs
  }

  const clearForm = () => {
    formRef?.current?.reset()
  }

  const submitData = e => {
    e.preventDefault()
    const formData = getFormData()
    const params = isEdit ? { id: currentData.id, ...formData } : formData
    onSubmit(params)
    clearForm()
  }

  const cancelForm = () => {
    clearForm()
    onCancel()
  }

  const test = () => {}

  return (
    <>
      <form ref={formRef}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
      </form>
      <button onClick={submitData}>Submit</button>
      <button onClick={cancelForm}>Cancel</button>
      <button onClick={test}>Test</button>
    </>
  )
}

export default AddEditTask
