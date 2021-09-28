import {useState} from "react";

const AddTodo = props =>{
    const [newTodo, setNewTodo] = useState('');


    const addTodo = (event)=> {
        event.preventDefault()
        if(newTodo){
            props.onNewTodo(newTodo)
        }
        setNewTodo('')
    }

    // UI for adding a Todo-item
    return(
        <div>
            <input type="text"
                   placeholder="your todo..."
                   className="form-control-lg"
                   value={newTodo}
                   onChange={(event => setNewTodo(event.target.value))}
            />
            <button className="btn btn-success"
                    onClick={(event => addTodo(event))}>
                Add Item
            </button>
        </div>
    )
}
export  default AddTodo
