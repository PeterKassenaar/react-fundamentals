import {useState} from "react";

// 1. Components
import Todo from "./Todo";
import AddTodo from "./AddTodo";

// 2. Initial Data
import {initialTodos} from "../data/initialTodos";

// 3. The functions ('api') to update the list of todos - THIS is what you're to test first!
import {addTodo, deleteTodo, toggleDone} from "../api/todo-api";

const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos)

    // 4. local functions - they DON'T perform mutations on the list of todos themselves.
    // This is done by the imported api-functions.
    const onToggleDone = id => {
        setTodos(toggleDone(todos, id))
    }

    const onDeleteTodo = id => {
        setTodos(deleteTodo(todos, id))
    }

    const onAddTodo = name => {
        setTodos(addTodo(todos, name))
    }

    // 5. Render the list of todos
    const renderTodoList = () => {
        return todos.map(todo => {
            return (
                <li className="list-group-item"
                    key={todo.id}>
                    <Todo todo={todo}
                          deleteTodo={(id) => onDeleteTodo(id)}
                          doneChange={(id) => onToggleDone(id)}/>
                </li>
            )
        })
    }

    // 6. UI for de list of Todos
    return (
        <>
            <h1>List of Todos</h1>
            <ul className="list-group">
                {renderTodoList()}
            </ul>
            <hr/>
            <AddTodo onNewTodo={(name) => onAddTodo(name)}/>
        </>
    )
}
export default TodoList
