function Task(props){

    function handleClick(e){
        let id = e.target.id
        props.deleteTask(id)
    }

    return(
        <li>
            <input type="checkbox" 
                   defaultChecked={props.completed} 
                   onClick={ ()=> props.toogleCompleted(props.id) }/>

            <span style={  props.completed? {textDecoration:'line-through'} : 
                                            {textDecoration:'none'} }>
                {props.text}
            </span>

            <button onClick={handleClick}
                    id={props.id}>
                Delete
            </button>

            <button>Edit</button>
        </li>
    )
}

export default Task