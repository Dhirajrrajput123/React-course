import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
    // console.log(newTodo);
  };

  const removeTodo=(index)=>{
      let arr=todos;
      arr.splice(index,1);
      setTodos([...arr]);
  }
  const updateTodo=(index)=>{
          todos[index].completed=todos[index].completed?false:true;
          setTodos([...todos]);
  }

  return (
    <div className="App">
       {/* <Router>
      <Switch>
        <Route exact path="/todos">
          <TodoList todos={todos} />
        </Route>
        <Route exact path="/create">
          <CreateTodo addTodo={addTodo} />
        </Route>
      </Switch>
    </Router> */}
    <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo}/>
    <CreateTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
