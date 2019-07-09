import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import useTodoState from './hooks/useTodoState'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoForm from './TodoForm';


const TodoApp = () => {
    const initalValues = [{id:1, task:'Go to school', completed:false}]
    const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState(initalValues)
    /*  const inital = [{ id: uuid(), task: 'play', completed: true }] */

  

    return <>
        <Paper elevation={0} style={{ padding: 0, margin: 0, height: '100vh', backgroundColor: "#fafafa" }}>
            <AppBar color="primary" position="static" style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} toggleTodo={toggleTodo} />
                </Grid>
            </Grid>
        </Paper>
    </>
}

export default TodoApp;