import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './actions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (id, text) => {
    setEditId(id);
    setText(text);
  };

  const handleUpdateTodo = () => {
    if (text.trim()) {
      dispatch(updateTodo(editId, text));
      setText('');
      setEditId(null);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
        />
        {editId !== null ? (
          <button onClick={handleUpdateTodo}>Update Todo</button>
        ) : (
          <button onClick={handleAddTodo}>Add Todo</button>
        )}
      </div>
    </div>
  );
};

export default TodoList;

