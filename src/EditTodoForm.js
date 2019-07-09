import React from 'react'
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState'


const EditTodoForm = ({ task, editTodo, id, toggleForm }) => {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form style={{ width: '100%', marginLeft:'1rem' }} onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleForm()
        }}>
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                autoFocus
                fullWidth />
        </form>)
}
export default EditTodoForm
