import React from 'react';

import TodosProvider from './state/todo/Provider';
import FilterProvider from './state/filter/Provider';

function App() {
  return (
    <TodosProvider>
      <FilterProvider>
        <h1>Context Api</h1>
      </FilterProvider>
    </TodosProvider>
  );
}

export default App;
