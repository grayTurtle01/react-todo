function Task(props){

    function handleClick(e){
        let id = e.target.id
        props.deleteTask(id)
    }

    return(
        <li>
            <input type="checkbox"/>
            {props.text}
            <button onClick={handleClick}
                    id={props.id}>
                Delete
            </button>

            <button>Edit</button>
        </li>
    )
}

export default Task