import React, { useState, useCallback, useEffect } from 'react';

function TodoItem({ id ,title, onDelete, completed, onStatusUpdate }) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckChange = useCallback((event) => {
    setIsChecked(event.target.checked);
  }, []);

  useEffect(() => {
    onStatusUpdate(id, isChecked);
  }, [id, isChecked, onStatusUpdate]);

  return (
    <>
      <li>{title}</li>
      <input type="checkbox" value={isChecked} onChange={handleCheckChange} />
      <button onClick={onDelete}>Excluir</button>
    </>
  )
}

export default TodoItem;