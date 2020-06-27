import React, { useContext, useCallback, useEffect } from 'react';

import TodosContext from '../../../../state/todo/Context';

import TodoItem from './components/TodoItem/TodoItem';

import * as todosActions from '../../../../state/todo/actions';

import styles from '../TodoList/TodoList.module.css';

function TodoList() {
  const { todos, dispatchToTodos } = useContext(TodosContext);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleDelete = useCallback((id) => {
    dispatchToTodos(todosActions.removeTodo(id));
  }, [dispatchToTodos]);

  const handleStatusUpdate = useCallback((id, completed) => {
    dispatchToTodos(todosActions.toggleTodoStatus(id, completed));
  }, [dispatchToTodos]);

  return (
    <div className={styles.container}>
      <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          id={todo.id}
          title={todo.title} 
          completed={todo.completed}
          onStatusUpdate={handleStatusUpdate}
          onDelete={() => {handleDelete(todo.id)}} 
        />
      ))}
      </ul>
    </div>
  )
}

export default TodoList;