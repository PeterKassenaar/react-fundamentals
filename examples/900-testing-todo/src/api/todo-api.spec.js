// todo-api.spec.js - holding the unit tests for the Todo-application

import {addTodo, deleteTodo, toggleDone} from "./todo-api";

describe('Testing the Todo List', () => {
    // 1. Dummy test, make sure everything works
    // remove the .only when you also want to perform the other tests
    it.only('should print 2 + 2 = 4', () => {
        expect(2 + 2).toBe(4)
    })

    // 2. Testing the toggle / done functionality
    describe('toggleDone', () => {
        it('Should mark the todo as completed when given an incomplete todo', () => {
            // 3. The actual test/assertion
            const startState = [{id: 1, name: 'Go Shopping', done: false}];
            const endState = toggleDone(startState, 1);
            expect(endState).toEqual([{id: 1, name: 'Go Shopping', done: true}])
        });
    });

    // 2a. Alternate test() syntax (you might be familiar with this, from other testing frameworks
    // test('toggleDone completes an incomplete todo', () => {
    // });

    // 4. Testing the deleteTodo functionality
    describe('deleteTodo', () => {
        it('Should delete a todo when it is given', () => {
            // 4a. The actual test/assertion
            const startState = [{id: 1, name: 'Go Shopping', done: false}];
            const endState = deleteTodo(startState, 1);
            expect(endState).toEqual([])
        });
    });

    // 5. Workshop - write a test for the addTodo functionality
    describe('addTodo', () => {
        it('Should add a todo when a name is given', () => {
            // 5a. The actual test/assertion
            const startState = [];
            const endState = addTodo(startState, 'Eat pizza');

            // 5b. Multiple expectations. They all have to pass
            expect(endState).toEqual(expect.any(Array))
            expect(endState[0].name).toBe('Eat pizza');
            expect(endState[0].done).toBe(false);
            expect(endState[0].id).toEqual(expect.any(String));
        });
    });
})
