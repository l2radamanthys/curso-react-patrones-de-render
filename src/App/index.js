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
  const [state, setState] = React.useState('');

  return (
    <React.Fragment>
      <TodoHeader />
      <TodoList />
    </React.Fragment>
  );
}

function TodoHeader() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
    </React.Fragment>
  );
}

function TodoList() {
  return (
    <React.Fragment>
      <TodoItem />
    </React.Fragment>
  );
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem() {
  return <p>TodoItem</p>;
}


export default App;
