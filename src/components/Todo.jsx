import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
  Checkbox,
} from '@mui/material';
import { Delete} from '@material-ui/icons'

const Todo = ({ title, checkTodo, id, isCompleted, deleteTodo, dateAdded }) => {
  const markComplete = () => checkTodo(id);
  const todoStyle = isCompleted
    ? { textDecoration: 'line-through' }
    : { textDecoration: 'none' };
  const delTodo = () => deleteTodo(id);
  return (
    <div>
      <Container>
        <Card style={{ marginTop: 35, background: 'lightblue' }}>
          <CardContent sx={{ margin: -2 }} style={{paddingBottom: 16}}>
            <Typography variant='h5' component='h2' style={todoStyle} sx={{ fontSize: 20 }}>
              <IconButton onClick={markComplete}>
                <Checkbox color='primary' style={{paddingBottom: 10}}/>
              </IconButton>
              {title}
              <IconButton style={{ float: 'right' , paddingTop: 15}} onClick={delTodo}>
                <Delete />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;