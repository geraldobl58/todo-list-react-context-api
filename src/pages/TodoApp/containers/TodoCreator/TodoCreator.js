import React, { useContext, useEffect, useRef } from 'react';

import { useFormik } from 'formik';
import TodoContext from '../../../../state/todo/Context';

import * as todosActions from '../../../../state/todo/actions';
import * as yup from 'yup';

import styles from './TodoCreator.module.css';

function TodoCreator() {
  const { dispatchToTodos } = useContext(TodoContext);

  const { getFieldProps, errors, handleSubmit } = useFormik({
    initialValues: {
      title: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({ title: yup.string().required('Obrigátorio!') }),
    onSubmit: (values, formikBag) => {
      dispatchToTodos(todosActions.addTodo(values.title));
      formikBag.setFieldValue('title', '', false);
    }
  });

  useEffect(() => {
    inputTitle.current.focus();
  }, []);

  const inputTitle = useRef(null);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input 
        type="text" { ...getFieldProps('title') } 
        autoComplete='off'
        placeholder="Nova Tarefa"
        ref={inputTitle}
        className={styles.input}
      />
      {errors.title ? (
        <small className={styles.error}>{errors.title}</small>
      ) : null}
      <button className={styles.submit} type="submit">Adicionar</button>
    </form>
  )
}

export default TodoCreator;