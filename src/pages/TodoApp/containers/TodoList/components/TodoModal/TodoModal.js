import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MdClose } from 'react-icons/md';

import styles from './TodoModal.module.css';

function TodoModal({ todoId, onModalClose, onTitleUpdate, findTitle }) {
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: findTitle(todoId)
    },
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
        {touched.title && errors.title ? (
          <small className={styles.error}>{errors.title}</small>
        ) : null}
        <button className={styles.submit} type="submit" disabled={!isValid}>Atualizar</button>
      </form>
    </div>
    </>
  )
}

export default TodoModal;