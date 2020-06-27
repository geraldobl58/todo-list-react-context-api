import React, { useState, useCallback, useEffect } from 'react';

import { MdModeEdit, MdDelete } from 'react-icons/md';

import styles from './TodoItem.module.css';

function TodoItem({ id ,title, onDelete, completed, onStatusUpdate, onModalOpen }) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckChange = useCallback((event) => {
    setIsChecked(event.target.checked);
  }, []);

  const handleTitleUpdate = useCallback(() => {
    onModalOpen(id, title);
  }, [id, onModalOpen, title]);

  useEffect(() => {
    onStatusUpdate(id, isChecked);
  }, [id, isChecked, onStatusUpdate]);

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <li className={styles.item}>
      <span className={completed ? styles.completed : null}>{title}</span>
      <div className={styles.controlButtons}>
        <button onClick={handleTitleUpdate}><MdModeEdit /></button>
        <input type="checkbox" value={isChecked} onChange={handleCheckChange} />
        <button onClick={handleDelete}><MdDelete /></button>
      </div>
    </li>
  )
}

export default TodoItem;