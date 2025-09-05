import './TodoList.css';
import React from 'react';


function TodoList(props) {
  const isEmpty = !props.loading && !props.totalTodos;
  const isEmptySearch = !props.loading && !!props.totalTodos && !props.searchedTodos.length;
  const pendingTodosList = props.searchedTodos.filter(todo => !todo.completed);
  const completedTodosList = props.searchedTodos.filter(todo => todo.completed);

  const renderFunc = props.children || props.renderFunc;

  return (
    <section className="centerContainer TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {isEmpty && props.onEmptyTodos()}
      {isEmptySearch && props.onEmptySearchTodos(props.searchText)}

      {(!props.loading && pendingTodosList.length > 0) && <div className="listSeparator">Pendings</div>}

      {!props.loading && pendingTodosList.map(renderFunc)}

      {(!props.loading && completedTodosList.length > 0) && <div className="listSeparator">Completed</div>}

      {!props.loading && completedTodosList.map(renderFunc)}
    </section>
  );
}

export { TodoList };

