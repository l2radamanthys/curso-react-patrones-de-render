import React from 'react';
// import { AppUI } from './AppUI';
// import { TodoProvider } from '../TodoContext';
// import { TodoList } from '../TodoList';


// function App() {
//   return (
//     <TodoProvider> 
//       <AppUI />
//     </TodoProvider>
//   );
// }


function App() {
  const [state, setState] = React.useState('Estado compartido');

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  );
}

function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({ children }) {
  return (
    <section class="TodoList-container">
      {children}
    </section>
  );
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>;
}

export default App;
