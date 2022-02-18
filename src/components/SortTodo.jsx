import React, {useState} from 'react'
import {Select, MenuItem, Container, InputLabel, FormControl} from '@mui/material'
import InitialList from '../mockdata/InitialList'

const SortTodo = (text) => {

    const [todos, setTodos] = useState(InitialList)
    const [value, setValue] = useState()
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const sortAlph = (a ,b) => {
        setTodos(todos.sort(todo => a.text < b.text))
      }
    
      const sortbyDate = (a ,b) => {
        setTodos(todos.sort(todo => a.text < b.text))
      }
  return (
    <Container>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }} >
         <InputLabel>Sort</InputLabel> 
        <Select label="Sort" size="small" value={value} onChange={handleChange}>
            <MenuItem value={"sortAlph"} onChange={sortAlph}>Alphabetically</MenuItem>
            <MenuItem value={"sortbyDate"} onChange={sortbyDate}>by Date</MenuItem>
        </Select>
        </FormControl>
    </Container>
  )
}

export default SortTodo