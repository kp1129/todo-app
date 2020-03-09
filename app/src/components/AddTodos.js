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
            {error && <div className="error"><p>Add a task to do</p></div>}
                <label htmlFor="todo" aria-labelledby='add-new'>
                    <input type="text" name="todo" id="todo" placeholder="add new task here" value={newTodo} onChange={handleInputChange} /> 
                </label>
                <button id='add-new' className='add-new' type="submit">add</button>
            </form>
            <button className='clear-completed' type="text" onClick={handleClear}>clear completed</button>
        </div>        
    )
}

export default AddTodos;