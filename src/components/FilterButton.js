

function FilterButton(props){
  return(
    <button onClick={ ()=> props.setFilter(props.name)}
            style={ props.isPressed? { color: 'red', textDecoration: 'underline', fontWeight: 'bold' } : 
                                     {color: 'black'} }
     >
      {props.name}
    </button>
  )
}

export default FilterButton