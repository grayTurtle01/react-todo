function Task(props){

    return(
        <li>
            <input type="checkbox"/>
            {props.text}
            <button>Delete</button>
            <button>Edit</button>
        </li>
    )
}

export default Task