import React from "react";
import "./EmptySearchTodos.css";

function EmptySearchTodos ({ searchText }) {
  return (
    <li className="EmptySearchTodos">
      <p className="EmptySearchTodos-p">
        We didn't find any matches for <b>"{searchText}"</b>
      </p>
    </li>
  )
}

export { EmptySearchTodos }