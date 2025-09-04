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

export default App;
