const Todo = ({todo, doneChange, deleteTodo}) => {

    // Check if the todo is done. If yes, show it with the
    // correct class (with line-through style)
    const className = todo.done ? 'done-todo' : '';

    return (
        <div className={`todo ${className}`}>
            <p className="toggle-todo"
               onClick={() => doneChange(todo.id)}>
                {todo.name}
            </p>
            <button className="btn btn-outline-danger btn-sm float-end"
                    onClick={() => deleteTodo(todo.id)}>Delete
            </button>
        </div>
    );
}
export default Todo
