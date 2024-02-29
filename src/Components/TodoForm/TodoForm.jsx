import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store';
import './todoForm.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
