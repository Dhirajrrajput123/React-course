import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,updateTodo,removeTodo}) => {
    console.log("inside todoList")
    console.log(todos);
  return (
    <div className='todoList'>
        <h1>Your Todos</h1>
        <div className='toto weight'>
         <p>Title</p>
         <p>Description</p>
         <p>Completed</p>
         <p>Update</p>
        <p>Remove</p>
         </div>
         {/* < TodoItem index="1" title="Dhiaj" description="Hello" completed="false"/> */}
         {
           todos.map((element,index)=>( < TodoItem removeTodo={removeTodo} updateTodo={updateTodo} index={index} title={element.title} description={element.description} completed={element.completed}/>))
         }
    </div>
  )
}

export default TodoList


// {
//     id: 1,
//     title: 'Learn React',
//     description: 'Complete the React tutorial series',
//     completed: false
//   }