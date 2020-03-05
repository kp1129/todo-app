import React, {useState} from 'react';
import MetaTags from 'react-meta-tags';
import ListOfTodos from './components/ListOfTodos';
import AddTodos from './components/AddTodos';
import {useLocalStorage} from './hooks/useLocalStorage';
import './App.css';

const App = () => {

  const [todos, setTodos] = useLocalStorage('todo list', [
    {
      task: "add tasks to do, then click on them to cross them off",
      completed: false,
      id: Date.now()
    }
  ]);

  // add newTodos from AddTodos form
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  // allow users to cross items off their todo list
  const toggleCompleted = (id) => {
    let newTodos = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(newTodos);
  }
 
  // clear completed todos
  const clearCompleted = () => {
    let newTodos = todos.filter(todo => !todo.completed);    
    setTodos(newTodos);    
  }

  return (
    <div className="App">
      <MetaTags>
        <title>Todo List App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </MetaTags>
      <h1>todo list</h1>

      {/* add tasks todo form */}
      <AddTodos addTodo={addTodo} clearCompleted={clearCompleted}/>

      {/* list of todos todo + dynamic pagination */}
      <ListOfTodos todos={todos} toggleCompleted={toggleCompleted}/>

    </div>
  );
}

export default App;
