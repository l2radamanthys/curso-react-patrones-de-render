import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from './useTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { useTodos } from './useTodos';

function App() {
  const {
    openModal,
    setOpenModal,
    completedTodos, 
    totalTodos,
    searchValue, 
    setSearchValue,
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    addTodo,
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos} 
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos totalTodos={totalTodos} />}

        {(!loading && completedTodos < totalTodos) && <div className="listSeparator">Pendings</div>}

        {searchedTodos.filter(todo => !todo.completed).map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}

        {(!loading && completedTodos > 0) && <div className="listSeparator">Completed</div>}

        {searchedTodos.filter(todo => todo.completed).map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal}/>
      
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
