import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import {
  Select,
  MenuItem,
  Container,
  InputLabel,
  FormControl,
} from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import InitialList from './mockdata/InitialList';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage("todos" ,InitialList);

  const checkTodo = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted);
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (text) => {
    const newTodo = {
      id: v4(), //package that generate random ids
      title: text,
      isCompleted: false,
      dateAdded: new Date().toISOString().slice(0, 10),
    };
    setTodos([...todos, newTodo]);
  };

  const renderSortSelection = () => (
    <Container>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 70 }}>
        <InputLabel>Sort</InputLabel>
        <Select
          label='Sort'
          size='small'
          value={sortBy}
          onChange={handleChange}
        >
          <MenuItem value={'ALPHABETICALLY'}>Alphabetically</MenuItem>
          <MenuItem value={'BY_DATE'}>by Date</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );

  const [sortBy, setSortBy] = useState('');
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    switch (sortBy) {
      case 'ALPHABETICALLY':
        return setTodos(todos.sort((a, b) => (b.title > a.title ? 1 : -1)));
      case 'BY_DATE':
        return setTodos(
          todos.sort((a, b) => (a.dateAdded - b.dateAdded ? 1 : -1))
        );
      default:
        return todos;
    }
  }, [sortBy]);

  return (
    <Container maxWidth='sm'>
      <h1 style={{ textAlign: 'center' }}>ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      {renderSortSelection()}
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}
export default App;