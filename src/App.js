import React, {useState} from 'react'
import { nanoid } from 'nanoid'


// Components
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Task from './components/Task'

let data = [ {text:"First task", completed:false},
              {text:"Second task", completed:false} ]




function App(props) {
  // State
  const [tasks, setTasks] = useState(data)


  // TaskList for <ul>
  let taskList = tasks.map( (task) => (
    <Task text={task.text} key={nanoid()}/>
  ))
  
  
  // Functions
  function addTask(text){
    let newTask = {'text':text, completed:false}
    setTasks( [...tasks, newTask])

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
