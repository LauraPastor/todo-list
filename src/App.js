
import React, {useState} from "react";
import { v4 } from "uuid";
import { Container } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import InitialList from "./mockdata/InitialList";
import SortTodo from "./components/SortTodo";


function App() {
  const [todos, setTodos] = useState(InitialList)

  const checkTodo = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id === id)
      todo.isCompleted = !todo.isCompleted
      return todo
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  const addTodo = (text) => {
    const newTodo = {
      id: v4(), //package that generate random ids
      title: text,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])

  }
  return (
    <Container maxWidth="sm">
      <h1 style={{textAlign: 'center'}}>ToDo List</h1>
      <TodoForm addTodo={addTodo}/> 
      <SortTodo />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}
export default App;
