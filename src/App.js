import React from 'react'


function App(props) {
  
  // return
  return (
   <div>

     <form>
       <input placeholder="Add New Task"/>
       <button>Add Task</button>
     </form>

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
