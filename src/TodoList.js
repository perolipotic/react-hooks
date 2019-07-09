import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'

import Todo from './Todo'

const TodoList = ({ removeTodo, todos, toggleTodo, editTodo }) => todos.length ? <Paper>
    <List>
        {todos.map((todo, i) =>
            <Todo
                {...todo}
                key={todo.id}
                isLast={i === todos.length - 1}
                editTodo={editTodo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo} />
        )}
    </List>
</Paper> : null

export default TodoList