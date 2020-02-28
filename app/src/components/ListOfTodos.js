import React from 'react';
import Todo from './Todo';

const ListOfTodos = ({todos, toggleCompleted}) => {
    return(
        <div className="list-container">
      
            {todos.map(todo => <Todo data={todo} toggleCompleted={toggleCompleted}/>)}
            
  
        </div>
    )
}

export default ListOfTodos;