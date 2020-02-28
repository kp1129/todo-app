import React, {useState} from 'react';

const AddTodos = (props) => {
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        let addMe = {
          task: newTask,
          id: Date.now(),
          completed: false
        }
        props.addTodo(addMe);
        setNewTask("");
      }
    return (
        <form onSubmit={handleAddTodo} >
            <label htmlFor="task">
                <input type="text" name="task" id="task" placeholder="add task" value={newTask} onChange={handleInputChange} />
            </label>
            <button type="submit">add</button>
        </form>
    )
}

export default AddTodos;