import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MdClose } from 'react-icons/md';

import styles from './TodoModal.module.css';

function TodoModal({ todoId, onModalClose, onTitleUpdate, findTitle }) {
  const { getFieldProps, errors, handleSubmit } = useFormik({
    initialValues: {
      title: findTitle(todoId)
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: yup.object({ title: yup.string().required('Obrigátorio!') }),
    onSubmit: (values, formikBag) => {
      onTitleUpdate(todoId, values.title);
      formikBag.setFieldValue('title', '', false);
      onModalClose();
    }
  });

  return (
    <>
      <div className={styles.backdrop} onClick={onModalClose}></div>
      <div className={styles.modal}>
      <button onClick={onModalClose} className={styles.closeButton}><MdClose /></button>
      <form onSubmit={handleSubmit}>
        <input 
          className={styles.input}
          type="text"
          autoComplete='off'
          placeholder="Nova Tarefa"
          { ...getFieldProps('title') }
        />
        {errors.title ? (
          <small className={styles.error}>{errors.title}</small>
        ) : null}
        <button className={styles.submit} type="submit">Atualizar</button>
      </form>
    </div>
    </>
  )
}

export default TodoModal;