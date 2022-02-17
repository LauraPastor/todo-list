import React, {useState} from 'react'
import { FormControl, Container, TextField, Button } from '@mui/material'

const TodoForm = ({addTodo}) => {
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault(); //stops refreshing the app
    addTodo(text);//text is the parameter
    setText("")
  }
  return (
    <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth={true}>
                <TextField label="I will do" required={true} style={{ marginTop: 10}} value={text} onChange={(e)=> setText(e.target.value)}></TextField>
                <Button variant="contained" type="submit" style={{ marginTop: 10}} type="submit">Add</Button>
            </FormControl>
        </form>
    </Container>
  )
}

export default TodoForm