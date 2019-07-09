import React from 'react'
import useToggleState from './hooks/useToggleState'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import EditTodoForm from './EditTodoForm';




const Todo = ({ task, completed, removeTodo, id, toggleTodo, editTodo, isLast }) => {
    const [isEditing, toggle] = useToggleState()
    return <>
        <ListItem style={{height:'64px'}}>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleForm={toggle}/> : <>
                <Checkbox onClick={() => toggleTodo(id)} checked={completed} />
                <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={()=> toggle()} aria-label="Edit">
                        <Edit ></Edit>
                    </IconButton>
                </ListItemSecondaryAction>
            </>}

        </ListItem>
       {!isLast && <Divider />}
    </>
}
export default Todo;