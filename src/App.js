import React from 'react'

// Components
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Task from './components/Task'

let tasks = [ {text:"First task", completed:false},
              {text:"Second task", completed:false} ]




function App(props) {
  let taskList = tasks.map( task => (
    <Task text={task.text}/>
  ))
  

  // return
  return (
   <div>

    <Form />  

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
