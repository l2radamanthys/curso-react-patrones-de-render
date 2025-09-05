import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../App/useTodos';

function TodoCounter( {completedTodos, totalTodos, loading}) {
  if (totalTodos > 0 && completedTodos === totalTodos) {
    return(
      <h3 className="TodoCounter">
        Congratulations, you have completed all the tasks.
      </h3>
    );
  } else {
    return (
      <h3 
        className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
      >
        You have completed <span>{completedTodos}</span> out <span>{totalTodos}</span> tasks
      </h3>
    );
  }
}
export { TodoCounter };
