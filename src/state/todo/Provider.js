import React, { useReducer } from 'react';

import TodoContext from './Context';
import todoReducer from './reducer';

function Provider({ children }) {
  const [todos, dispatchTodos] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatchTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

export default Provider;