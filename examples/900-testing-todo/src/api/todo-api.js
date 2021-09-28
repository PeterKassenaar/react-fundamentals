// todo-api.js - just a file with some functionality for this app.
// We separated this logic from the component(s), so it:
//      - can be reused across different components
//      - is easier to test

import {v4 as uuid} from "uuid"; // for creating random unique id's.

/**
 * Toggle the state of a todo-item
 * @param todoList - The current list of todos
 * @param id - the id of the item to toggle (set state to false or true)
 * @returns {*} - the updated list
 */
export const toggleDone = (todoList, id) => {
    const filteredTodos = todoList.map(todo => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
        return todo;
    })
    return filteredTodos;
}

/**
 * Add a new todo to the list
 * @param todoList - the current list of todos
 * @param todoName - the title (name) of the new todo
 * @returns {*[]} - the list with the new todo added
 */
export const addTodo = (todoList, todoName) => {
    const newTodo = {
        id: uuid(),
        name: todoName,
        done: false
    }
    return [...todoList, newTodo]
}

/**
 * Delete a todo from the list
 * @param todoList - the current list of todos
 * @param id - the id of the todo to delete
 * @returns {*[]} - the filtered list of todos
 */
export const deleteTodo = (todoList, id) => {
    return todoList.filter(todo => todo.id !== id);
}
