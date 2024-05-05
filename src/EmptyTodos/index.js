import React from "react";
import "./EmptyTodos.css"

function EmptyTodos() {
  return (
    <li className="EmptyTodoResult">
      <p className="EmptyTodoResult-p">No hay resultados...</p>
    </li>
  )
}

export { EmptyTodos };