import React from 'react';
import './TodoHeader.css';

function TodoHeader({ children }) {
  return(
    <React.Fragment>
      <h1 className="TodoHeader">My Pending Tasks</h1>
      <div className="centerContainer">
        {children}
      </div>
    </React.Fragment>
  );
}

export { TodoHeader };