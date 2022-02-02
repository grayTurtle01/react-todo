import React from 'react'

// Components
import Form from './components/Form'
import FilterButton from './components/FilterButton'

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
      
      <li>
        <input type="checkbox" />
        First Task
        <button>Delete</button>
        <button>Edit</button>
      </li>

      <li>
        <input type="checkbox" />
        Second Task
        <button>Delete</button>
        <button>Edit</button>
      </li>

    </ul>


   </div>
  )
}


export default App;
