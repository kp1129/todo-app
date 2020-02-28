import React from 'react';
import Todo from './Todo';

const ListOfTodos = ({todos}) => {
    return(
        <ul>
            {todos.map(todo => <Todo data={todo}/>)}
            
        </ul>
    )
}

export default ListOfTodos;