import React, { useContext, useCallback, useState } from 'react';

import TodosContext from '../../../../state/todo/Context';
import FilterContext from '../../../../state/filter/Context';

import TodoItem from './components/TodoItem/TodoItem';
import TodoModal from './components/TodoModal/TodoModal';

import * as todosActions from '../../../../state/todo/actions';

import styles from '../TodoList/TodoList.module.css';

function filteredList(list, currentFilter) {
  switch(currentFilter) {
    case 'all':
      return list;
    case 'active':
      return list.filter((item) => {
        return item.completed === false
      });
    case 'completed':
      return list.filter((item) => {
        return item.completed === true
      });
    default:
      throw new Error();
  }
}

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

  const [currentId, setCurrentId] = useState(null);

  const handleModalOpen = useCallback((id) => {
    setCurrentId(id);
  }, []);
 
  const handleModalClose = useCallback(() => {
    setCurrentId(null);
  }, []);

  const getTitle = useCallback((id) => {
    const currentTodo = todos.find((todo) => {
      return todo.id === id;
    });

    return currentTodo.title;
  }, [todos]);

  const { filter } = useContext(FilterContext);

  return (
    <div className={styles.container}>
      <ul className={styles.container}>
      {filteredList(todos, filter).map((todo) => (
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
      {currentId && (
        <TodoModal 
          todoId={currentId}
          onModalClose={handleModalClose} 
          onTitleUpdate={handleTitleUpdate} 
          findTitle={getTitle}
        />)
      }
    </div>
  )
}

export default TodoList;