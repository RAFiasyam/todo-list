import TodoList from './components/TodoList';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('')
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='container mx-auto p-4 gap-5 flex flex-col '>
      <h1 className='text-3xl font-bold text-center'>(づ￣ 3￣)づ</h1>
      <div className='flex items-center flex-col mb-4 gap-6 mx-5'>
        <div className='flex flex-row gap-3'>
          <input
            type='text'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Type todo here!!!'
            className='input input-bordered w-full max-w-xs'
          />
          <button
            onClick={handleAddTodo}
            className='btn btn-success text-white'
          >
            Add
          </button>
        </div>
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
      </div>
    </div>
  );
}

export default App;
