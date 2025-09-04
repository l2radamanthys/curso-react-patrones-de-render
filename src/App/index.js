import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import { TodoList } from '../TodoList';


function App() {
  return (
    <TodoProvider> 
      <AppUI />
    </TodoProvider>
  );
}


// function App() {
//   const [state, setState] = React.useState('Estado compartido');

//   return (
//     <React.Fragment>
//       <TodoHeader>
//         <TodoCounter />
//         <TodoSearch />
//       </TodoHeader>
//       <TodoList>
//         <TodoItem state={state} />
//       </TodoList>
//     </React.Fragment>
//   );
// }


export default App;
