import React, {useState} from 'react';

const AddTodos = ({addTodo, clearCompleted}) => {
    const [newTodo, setNewTodo] = useState("");
    const [error, setError] = useState(false);

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        // prevent users from adding empty task entries
        if (newTodo.trim()){
            // if entry isn't 'enter' or 'space', add it
            setError(false);
            let addMe = {
                task: newTodo,
                id: Date.now(),
                completed: false
              }
              addTodo(addMe);
              setNewTodo("");
        } else {
            // display error notification
            setError(true);
        }        
      }

      const handleClear = (event) => {
          event.preventDefault();
          clearCompleted();
        //   clear the error if it was showing from a prior interaction
          setError(false);
      }
    return (
        <div className="form-container">
            <form onSubmit={handleAddTodo} >
                <label htmlFor="todo">
                    <input type="text" name="todo" id="todo" placeholder="add task" value={newTodo} onChange={handleInputChange} /> 
                </label>
                <button type="submit">add new</button>
            {error && <div className="error"><p>Can't add empty tasks!</p><p>Please add a task to do</p></div>}
            </form>
            <button type="text" onClick={handleClear}>clear completed</button>
        </div>
        
    )
}

export default AddTodos;