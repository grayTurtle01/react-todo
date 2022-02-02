import React from 'react'

import Form from './components/Form'

function App(props) {
  
  // return
  return (
   <div>

    <Form />  

    <div>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
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
