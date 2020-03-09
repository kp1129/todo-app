import React from "react";
import "../App.css";

const Todo = ({data, toggleCompleted}) => {
    
return <li className={data.completed ? "completed todo" : "todo"} onClick={() => toggleCompleted(data.id)}>
           {data.task}
        </li>;
};

export default Todo;
