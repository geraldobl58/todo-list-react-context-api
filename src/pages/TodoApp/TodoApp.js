import React from 'react';

import TodoCreator from './containers/TodoCreator/TodoCreator';

function TodoApp() {
  return (
    <>
      <TodoCreator />
      <main>Todos</main>
      <footer>TodoFilter</footer>
    </>
  )
}

export default TodoApp;