import React, {useState} from 'react'
import { nanoid } from 'nanoid'

import './App.css'


// Components
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Task from './components/Task'

let data = [ {text:"First task", completed:false, id:nanoid()},
             {text:"Second task", completed:false, id:nanoid()} 
            ]




function App(props) {
  // State
  const [tasks, setTasks] = useState(data)


  // TaskList for <ul>
  let taskList = tasks.map( (task) => (
    <Task text={task.text} 
          key={nanoid()}
          id={task.id}
          completed={task.completed}

          deleteTask={deleteTask}
          toogleCompleted={toogleCompleted}
          updateTask={updateTask}
    />

  ))
  
  
  // Functions
  function addTask(text){
    let newTask = {'text':text, completed:false, id:nanoid()}
    setTasks( [...tasks, newTask] )

  }

  function deleteTask(id){
    let updatedTasks = tasks.filter( task => ( task.id !== id) )

    setTasks(updatedTasks)

  }

  function toogleCompleted(id){

    let updatedTasks = tasks.map( task => {
      if( task.id === id ){
        task.completed = !task.completed
        return task
      }
      else{
        return task
      }
    })

    setTasks(updatedTasks)
  }

  function updateTask(id, newText){
    let updatedTasks = tasks.map( task => {
      if( task.id === id){
        task.text = newText
        return task
      }
      else{
        return task
      }
    })

    setTasks(updatedTasks)

  }

  // return
  return (
   <div id="container">

    <Form addTask={addTask} />  

    <div>
      <FilterButton name='All' />
      <FilterButton name='Active' />
      <FilterButton name='Completed' />
    </div>

    <div id="tasks-container">

      <ul className='miClase'>
        {taskList}
      </ul>
      
    </div>


   </div>
  )
}


export default App;
