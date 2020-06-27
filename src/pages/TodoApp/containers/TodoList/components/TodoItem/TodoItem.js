import React, { useState, useCallback, useEffect } from 'react';

function TodoItem({ id ,title, onDelete, completed, onStatusUpdate, onModalOpen }) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckChange = useCallback((event) => {
    setIsChecked(event.target.checked);
  }, []);

  const handleTitleUpdate = useCallback(() => {
    onModalOpen(id);
  }, [id, onModalOpen]);

  useEffect(() => {
    onStatusUpdate(id, isChecked);
  }, [id, isChecked, onStatusUpdate]);

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <>
      <li>{title}</li>
      <button onClick={handleTitleUpdate}>Autliazar</button>
      <input type="checkbox" value={isChecked} onChange={handleCheckChange} />
      <button onClick={handleDelete}>Excluir</button>
    </>
  )
}

export default TodoItem;