import React, {useState} from 'react';
import ListOfTodos from './components/ListOfTodos';
import AddTodos from './components/AddTodos';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([{
    task: "add tasks to do",
    completed: false,
    id: Date.now()
  }]);

 
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <h1>todo list</h1>

      {/* list of todos todo */}
      <ListOfTodos todos={todos}/>

      {/* add tasks todo form */}
      <AddTodos addTodo={addTodo} />

    </div>
  );
}

export default App;
