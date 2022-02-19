import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, checkTodo, deleteTodo, sortTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          checkTodo={checkTodo}
          id={todo.id}
          isCompleted={todo.isCompleted}
          deleteTodo={deleteTodo}
          sortTodo={sortTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;