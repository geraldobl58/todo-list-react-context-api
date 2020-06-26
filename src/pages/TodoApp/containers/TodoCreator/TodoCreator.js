import React, { useContext, useEffect } from 'react';

import { useFormik } from 'formik';

import TodoContext from '../../../../state/todo/Context';

import * as todosActions from '../../../../state/todo/actions';

function TodoCreator() {
  const { todos, dispatchToTodos } = useContext(TodoContext);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    onSubmit: (values) => {
      dispatchToTodos(todosActions.addTodo(values.title));
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
        type="text" { ...formik.getFieldProps('title') } 
        autoComplete='off'
        placeholder="Nova Tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TodoCreator;