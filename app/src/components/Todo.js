import React from "react";
import "./Todo.css";

const Todo = ({data, toggleCompleted}) => {
    
return <div className={data.completed ? "completed todo" : "todo"} onClick={() => toggleCompleted(data.id)}>
            <p>{data.task}</p>
        </div>;
};

export default Todo;
