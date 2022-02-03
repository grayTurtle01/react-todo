import {useState} from 'react'

function Task(props){
    // state
    const [isEditing, toogleIsEditring] = useState(false)
    const [newText, setNewText] = useState(props.text)

    // functions
    function handleClick(e){
        let id = e.target.id
        props.deleteTask(id)
    }

    function toogleState(){
        toogleIsEditring( !isEditing )
    }

    function handleOnChange(e){
        setNewText(e.target.value)
    }

    function handleUpdate(e){
        e.preventDefault()
        props.updateTask(props.id, newText)
        toogleState()

    }

    // templates
    const task = (
        <li className="row">
            <div>

                <input type="checkbox" 
                    defaultChecked={props.completed} 
                    onClick={ ()=> props.toogleCompleted(props.id) }/>

                <span style={  props.completed? {textDecoration:'line-through'} : 
                                                {textDecoration:'none'} }>
                    {props.text}
                </span>
            </div>

            <div>
                <button onClick={handleClick}
                        id={props.id}>
                    Delete
                </button>

                <button onClick={ toogleState }>
                    Edit
                </button>

            </div>    
        </li>
        
    )

    const editingTask = (
        <li className="row">
            <form onSubmit={ handleUpdate }>

                <input type="text" 
                       value={newText}  
                       onChange={handleOnChange} 
                    />

                <button 
                        id={props.id}>
                    Update
                </button>

            </form>

            <div>
               

                <button onClick={ toogleState }>
                    Cancel
                </button>

            </div>    
        </li>
        
    )

    return(
        <>
            { isEditing? editingTask : task  }
        </>
    )
}

export default Task