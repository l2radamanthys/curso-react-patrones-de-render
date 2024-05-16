import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [formError, setFormError] = React.useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length > 5) {
      addTodo(newTodoValue);
      setOpenModal(false);
    } else {
      setFormError(true);
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return(
    <form onSubmit={onSubmit}>
      <label>Add new Task</label>
      <textarea
        placeholder="Task name"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>

      {formError && <div className="TodoForm-formError">Error: Not valid task name.</div>}

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >Cancel</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >Add</button>
      </div>
    </form>
  )
}

export { TodoForm };
