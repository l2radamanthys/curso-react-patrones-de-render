import React from "react";
import "./EmptyTodos.css";
import { TodoContext } from "../App/useTodos";


function EmptyTodos() {
  return (
    <li className="EmptyTodoResult">
      <p className="EmptyTodoResult-p">
        Please add your first task...
      </p>
    </li>
  )
}

export { EmptyTodos };