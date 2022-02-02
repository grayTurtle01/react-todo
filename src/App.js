import React from 'react'

// Components
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Task from './components/Task'

function App(props) {
  
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
      <Task text="first task" />
      <Task text="second task" />
    </ul>


   </div>
  )
}


export default App;
