import { useState } from 'react'
 
function Form(props){
  // state
  const [newTask, setNewTask] = useState('')


  function handleSubmit(e){
    e.preventDefault()
    console.log(newTask)
    setNewTask('')
    props.addTask(newTask)
  }

  function handleOnChange(e){
    setNewTask(e.target.value)
  }

  return(
  <form onSubmit={handleSubmit}>
    <input placeholder="Add New Task" 
           onChange={ handleOnChange }
           value={newTask}
           />
    <button>Add Task</button>
  </form>
  )
}

export default Form