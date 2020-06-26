import React, { useReducer } from 'react';

import FilterContext from './Context';
import filterReducer from './reducer'

function Provider({ children }) {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'all');

  return (
    <FilterContext.Provider value={{ filter, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default Provider;