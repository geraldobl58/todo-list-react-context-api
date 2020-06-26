import * as todoTypes from './types';

export function addTodo(title) {
  return {
    type: todoTypes.ADD_TODO,
    payload: {
      title: title
    }
  }
}

export function toggleTodoStatus(id, completed) {
  return {
    type: todoTypes.TOGGLE_TODO_STATUS,
    payload: {
      id: id,
      completed: completed
    }
  }
}

export function toggleTodoTitle(id, title) {
  return {
    type: todoTypes.TOGGLE_TODO_TITLE,
    payload: {
      id: id,
      title: title
    }
  }
}

export function removeTodo(id) {
  return {
    type: todoTypes.REMOVE_TODO,
    payload: {
      id: id
    }
  }
}