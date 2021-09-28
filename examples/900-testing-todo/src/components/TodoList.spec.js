import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import TodoList from "./TodoList";

// Remove the .skip part and run with 'npm run test:component' to run these tests.
describe.skip('TodoList Component', () =>{
    it('should render the TodoList component', () =>{

        // Call the render function to render the output (DOM).
        render(<TodoList />)

        // 3. write rendered output to the debug screen (console)
        screen.debug()

        // 4. Select an element from the component and expect it to be there
        expect(screen.getByText('Eat')).toBeInTheDocument();

        // 5. Expect a textbox to be in the document
        expect(screen.getByRole('textbox')).toBeInTheDocument();

        // 6. type text in the box and fire event
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Learn React'}
        })

        // 7. what does the DOM look like now?
        screen.debug()

        // 8. simulate a click on the button
        fireEvent.click(screen.getByRole('button', {
            name : /add item/i
        }))

        // 9. Expect the item is added to the list
        expect(screen.getByText('Learn React')).toBeInTheDocument()

        // 10. More options on firing events:
        // https://testing-library.com/docs/dom-testing-library/api-events/#fireevent
    })
})
