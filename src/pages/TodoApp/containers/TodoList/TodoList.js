import React, { useContext, useCallback, useState } from 'react';

import TodosContext from '../../../../state/todo/Context';

import TodoItem from './components/TodoItem/TodoItem';
import TodoModal from './components/TodoModal/TodoModal';

import * as todosActions from '../../../../state/todo/actions';

import styles from '../TodoList/TodoList.module.css';

function TodoList() {
  const { todos, dispatchToTodos } = useContext(TodosContext);

  const handleTitleUpdate = useCallback((id, title) => {
    dispatchToTodos(todosActions.toggleTodoTitle(id, title));
  }, [dispatchToTodos]);

  const handleDelete = useCallback((id) => {
    dispatchToTodos(todosActions.removeTodo(id));
  }, [dispatchToTodos]);

  const handleStatusUpdate = useCallback((id, completed) => {
    dispatchToTodos(todosActions.toggleTodoStatus(id, completed));
  }, [dispatchToTodos]);

  const [showModal, isShowModal] = useState(false);

  const [currentId, setCurrentId] = useState(null);

  const handleModalOpen = useCallback((id) => {
    setCurrentId(id);
    isShowModal(true);
  }, []);
 
  const handleModalClose = useCallback(() => {
    isShowModal(false);
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.container}>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          id={todo.id}
          title={todo.title} 
          completed={todo.completed}
          onModalOpen={handleModalOpen}
          onStatusUpdate={handleStatusUpdate}
          onDelete={handleDelete} 
        />
      ))}
      </ul>
      {showModal && (
        <TodoModal 
          todoId={currentId}
          onModalClose={handleModalClose} 
          onTitleUpdate={handleTitleUpdate} 
        />)
      }
    </div>
  )
}

export default TodoList;