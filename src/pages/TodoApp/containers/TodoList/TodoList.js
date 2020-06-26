import React, { useContext } from 'react';

import TodosContext from '../../../../state/todo/Context';

import styles from '../TodoList/TodoList.module.css';

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <div className={styles.container}>
      <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
      </ul>
    </div>
  )
}

export default TodoList;