import React from 'react';
import './TodoHeader.css';

function TodoHeader({ children, loading }) {
  React.Children.toArray(children)

  return(
    <React.Fragment>
      <h1 className="TodoHeader">My Pending Tasks</h1>
      <div className="centerContainer">
        {
          React.Children
              .toArray(children)
              .map(child => React.cloneElement(child, { loading }))
        }
      </div>
    </React.Fragment>
  );
}

export { TodoHeader };