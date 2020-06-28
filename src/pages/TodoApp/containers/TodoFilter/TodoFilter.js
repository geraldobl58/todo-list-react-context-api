import React, { useContext, useCallback, useState, useEffect } from 'react';

import FilterContext from '../../../../state/filter/Context';

import * as filterActions from '../../../../state/filter/actions';

import TodoSelect from './components/TodoSelect/TodoSelect';

import styles from './TodoFilter.module.css';

function TodoFilter() {
  const { filter, dispatchFilter } = useContext(FilterContext);

  const [selectValue, setSelectValue] = useState(filter);

  const handleOptionChange = useCallback((event) => {
    setSelectValue(event.target.value);
  }, []);

  const updateFilter = useCallback((filter) => {
    dispatchFilter(filterActions.toggleFilter(filter));
  }, [dispatchFilter]);

  useEffect(() => {
    updateFilter(selectValue);
  }, [selectValue, updateFilter]);

  return (
    <div className={styles.container}>
      <TodoSelect 
        value={selectValue} 
        onOptionChange={handleOptionChange} 
        options={[
          { value: 'all', title: 'Todas as tarefas' },
          { value: 'active', title: 'Tarefas a fazer' },
          { value: 'completed', title: 'Tarefas realizadas' },
        ]} 
      />
    </div>
  );
}

export default TodoFilter;