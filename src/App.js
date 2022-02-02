import React, {useState} from 'react'
import { nanoid } from 'nanoid'


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
          deleteTask={deleteTask}
          id={task.id}
    />

  ))
  
  
  // Functions
  function addTask(text){
    let newTask = {'text':text, completed:false, id:nanoid()}
    setTasks( [...tasks, newTask] )

  }

  function deleteTask(id){
    let updatedTasks = tasks.filter( task => {
      if( task.id != id){
        return task
      }
    })

    setTasks(updatedTasks)

  }


  // return
  return (
   <div>

    <Form addTask={addTask} />  

    <div>
      <FilterButton name='All' />
      <FilterButton name='Active' />
      <FilterButton name='Completed' />
    </div>

    <ul>
      {taskList}
    </ul>


   </div>
  )
}


export default App;
