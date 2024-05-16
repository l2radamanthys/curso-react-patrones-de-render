import React from "react";
import "./EmptyTodos.css"

function EmptyTodos() {
  return (
    <li className="EmptyTodoResult">
      <p className="EmptyTodoResult-p">We didn't find any matches</p>
    </li>
  )
}

export { EmptyTodos };