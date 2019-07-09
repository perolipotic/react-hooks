import  uuid from 'uuid/v4';
import useLocalStorageState from './useLocalStorageState'

export default initialValues => {
    const [todos, setTodos] = useLocalStorageState("todos", initialValues)
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: true }])
        },
        removeTodo: id => {
            const updatedTodos = todos.filter(todo => todo.id !== id)
            setTodos(updatedTodos)
        },
        toggleTodo: id => {
            const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodos)
        },
        editTodo: (id, newTask) => {
            const updatedTodos = todos.map(todo=> todo.id === id ? {...todo, task: newTask} : todo)
            setTodos(updatedTodos)
        }
    }
}
