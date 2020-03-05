import React from "react";
import "../App.css";

const Todo = ({data, toggleCompleted}) => {
    
return <div className={data.completed ? "completed todo" : "todo"} onClick={() => toggleCompleted(data.id)}>
            <li>{data.task}</li>
        </div>;
};

export default Todo;
