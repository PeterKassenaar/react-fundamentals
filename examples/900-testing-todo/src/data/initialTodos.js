import {v4 as uuid} from "uuid";

export const initialTodos =
    [
        {id: uuid(), name: 'Eat', done: false},
        {id: uuid(), name: 'Sleep', done: false},
        {id: uuid(), name: 'Code', done: false}
    ]
