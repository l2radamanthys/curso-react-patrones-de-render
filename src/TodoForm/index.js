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
    event !== null && event.preventDefault();
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
    const text = event.target.value;
    if (formError && text.length > 5) {
      setFormError(false);
    }
    setNewTodoValue(text);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit(null);
    }
  };

  return(
    <form onSubmit={onSubmit}>
      <label>Add new Task</label>
      <textarea
        placeholder="Task name"
        value={newTodoValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></textarea>

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

      {formError && <div className="TodoForm-formError"> Task name is not valid.</div>}
    </form>
  )
}

export { TodoForm };
