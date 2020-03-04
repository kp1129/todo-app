import React, {useState} from 'react';
import Todo from './Todo';
import Pagination from './Pagination';

const ListOfTodos = ({todos, toggleCompleted}) => {

    const [activePage, setActivePage] = useState(1);
    const [start, setStart] = useState(0);
    // for design purposes, the app shows a max of 5 todos
    // per page
    const [end, setEnd] = useState(5);
   
    // display function fires when a page button is clicked

    // it changes state and determines which todos get displayed
    const display = (pageNum) => {        
        setActivePage(pageNum);
        let e = pageNum * 5;
        setEnd(e);
        let s = e - 5;
        setStart(s);
    }

    return(
        <div className="list-container">          
      
            {todos.map(todo => <Todo data={todo} toggleCompleted={toggleCompleted}/>).reverse().slice(start, end)}           
       
            <Pagination display={display} total={todos.length}/>
        </div>
    )
}

export default ListOfTodos;