// todo.spec.js - a React Testing Library (RTL) file
// This is test file for the COMPONENT. Not the functionality
// remove the .skip when testing a component with 'npm run test:component'

import React from "react";
import {render, screen} from "@testing-library/react";
import Todo from "./Todo";

// mocking the data
const todo = {id: 1, name: 'Eat pizza', done: false}

describe.skip('Todo Component', () =>{
    it('should render the Todo component', () =>{
        render(<Todo todo={todo}/>)
        // 1. write rendered output to the debug screen (console)
        screen.debug()

        // 2. Select an element from the component and expect it to be there
        expect(screen.getByText('Eat pizza')).toBeInTheDocument();

        // 2a. using a regex to check for case insensitivity in this case
        expect(screen.getByText(/eat pizza/i)).toBeInTheDocument();
    })

    it('should be able to get the button by role', ()=>{
        render(<Todo todo={todo}/>)
        // screen.getByRole('') // just checking which roles are available
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
})
