import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../store';
import './todoList.css';

const TodoList = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = (id, newText) => {
    const newtext = prompt("Edit Todo", newText);
    if (newtext !== null) {
      dispatch(editTodo({ id, newText: newtext }));
    }
  };

  return (
    <div className={`list-container ${todos.length > 0 ? 'with-border' : ''}`}>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <div className="buttons">
            <button className="edit-btn" onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
