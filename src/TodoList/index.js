import './TodoList.css';
import React from 'react';


function TodoList(props) {
  const isEmpty = !props.loading && !props.searchedTodos?.length;
  const pendingTodosList = props.searchedTodos.filter(todo => !todo.completed);
  const completedTodosList = props.searchedTodos.filter(todo => todo.completed);

  console.log(completedTodosList)

  return (
    <section className="centerContainer TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {isEmpty && props.onEmptyTodos()}

      {(!props.loading && props.completedTodos < props.totalTodos) && <div className="listSeparator">Pendings</div>}

      {pendingTodosList.map(props.render)}

      {(!props.loading && props.completedTodos > 0) && <div className="listSeparator">Completed</div>}

      {completedTodosList.map(props.render)}
    </section>
  );
}

export { TodoList };

