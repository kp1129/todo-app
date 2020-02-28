import React from "react";

const Todo = ({data}) => {
return <li className="todo">{data.task}</li>;
};

export default Todo;
