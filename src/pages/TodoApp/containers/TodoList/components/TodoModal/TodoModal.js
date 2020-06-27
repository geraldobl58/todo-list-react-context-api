import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function TodoModal({ todoId, onModalClose, onTitleUpdate }) {
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: ''
    },
    validationSchema: yup.object({ title: yup.string().required('Obrigátorio!') }),
    onSubmit: (values, formikBag) => {
      onTitleUpdate(todoId, values.title);
      formikBag.setFieldValue('title', '', false);
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input 
        type="text" { ...getFieldProps('title') } 
        autoComplete='off'
        placeholder="Nova Tarefa"
      />
      {touched.title && errors.title ? (
        <small >{errors.title}</small>
      ) : null}
      <button type="submit" disabled={!isValid}>Atualizar</button>
    </form>
      <button onClick={onModalClose}>Fechar</button>
    </>
  )
}

export default TodoModal;