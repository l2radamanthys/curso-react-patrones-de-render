import React from "react";
import "./EmptyTodos.css";
import { TodoContext } from "../App/useTodos";


function EmptyTodos({ totalTodos }) {
  return (
    <li className="EmptyTodoResult">
      <p className="EmptyTodoResult-p">
        {totalTodos > 0 && <>We didn't find any matches</>}
        {totalTodos === 0 && <>Please add your first task...</>}
      </p>
    </li>
  )
}

export { EmptyTodos };