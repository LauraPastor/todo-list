import React from 'react'
import { Card, CardContent, Typography, Container, IconButton, Checkbox } from '@mui/material'
import { Delete} from '@material-ui/icons'

const Todo = ({title, checkTodo, id, isCompleted, deleteTodo }) => {
    const markComplete = () => checkTodo(id)
    const todoStyle = isCompleted ?  {textDecoration: "line-through"} : {textDecoration: "none"}
    const delTodo = () => deleteTodo(id)
  return (
    <div>
        <Container>
            <Card variant="outlined" style={{marginTop: 35, background: "lightblue"}}>
                <CardContent>
                    <Typography variant="h5" component="h2" style={todoStyle}>
                        <IconButton onClick={markComplete}>
                            <Checkbox  color='primary' />
                        </IconButton>
                        {title}
                        <IconButton style={{float: 'right'}} onClick={delTodo}>
                            <Delete />
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    </div>
  )
}

export default Todo