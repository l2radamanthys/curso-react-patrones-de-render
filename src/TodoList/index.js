import './TodoList.css';
import React from 'react';


function TodoList({children}) {
  return (
    <div className="centerContainer">
      <ul className="TodoList">
        {children}
      </ul>
    </div>
  );
}

export { TodoList };

