
import React, {useState} from "react";
import { v4 } from "uuid";
import { Container } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import InitialList from "./InitialList";
import { Button } from "@mui/material";


function App() {
  const [todos, setTodos, todolist] = useState(InitialList)

  const checkTodo = (id) => {
    console.log(id)
    setTodos(todos.map((todo) => {
      if(todo.id == id)
      todo.isCompleted = !todo.isCompleted
      console.log(todo.isCompleted)
      return todo
    }))
  }

//const titles = InitialList.map(item => item.title)
// const sortAlph = (titles) => {
//   titles.sort( (a, b) => a.localeCompare(b, 'en', {ignorePunctuation: true}))
// }

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

// const names = ["Raquel", "Laura", "Anna", "Francesco"]
// names.sort()
// return names

  }
   const sortAlph = (todo, style) => {


   
   const orderedTodos = InitialList.map(todo => 
    
    
    todo.title).sort((a, b) => a.localeCompare(b, "en")
    
    )
    
     setTodos(orderedTodos)

    }


  return (
    <Container maxWidth="sm">
      <h1 style={{textAlign: 'center'}}>ToDo List</h1>
      <TodoForm addTodo={addTodo}/> 
      <Button onClick={sortAlph}>Sort Alphabetically</Button>
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </Container>

  );
}

export default App;
