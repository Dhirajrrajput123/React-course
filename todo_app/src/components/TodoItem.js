import React from 'react'

const TodoItem = (props) => {
  console.log("hrrlcmkjfdds");
  return (
    <div key={props.index} className='toto'>
         <p className='entry'>{props.title}</p>
         <p className='entry'>{props.description}</p>
         <p className='entry'>{props.completed?"Completed":"Not Completed"}</p>
         <p className='entry'><button onClick={()=>props.updateTodo(props.index)}>Update</button></p>
        <p className='entry'><button onClick={()=>props.removeTodo(props.index)}>Remove</button></p>
    </div>
  )
}

export default TodoItem