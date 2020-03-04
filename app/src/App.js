import React, {useState} from 'react';
import ListOfTodos from './components/ListOfTodos';
import AddTodos from './components/AddTodos';
import Pagination from './components/Pagination';
import mockData from './mockData';
import './App.css';

const App = () => {
// use the snippet below as state when done testing
  // [{
  //   task: "add tasks to do",
  //   completed: false,
  //   id: Date.now()
  // }]

  const [todos, setTodos] = useState(mockData);

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
      <h1>todo list</h1>

      {/* list of todos todo + dynamic pagination */}
      <ListOfTodos todos={todos} toggleCompleted={toggleCompleted}/>

      {/* add tasks todo form */}
      <AddTodos addTodo={addTodo} clearCompleted={clearCompleted}/>

    </div>
  );
}

export default App;
