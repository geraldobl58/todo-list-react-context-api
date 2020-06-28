import React from 'react';

import styles from './TodoSelect.module.css';

function TodoSelect({ value, onOptionChange, options }) {
  return (
    <select className={styles.select} value={value} onChange={onOptionChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.title}</option>
      ))}
    </select>
  );
}

export default TodoSelect;