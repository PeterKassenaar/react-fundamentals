import React from 'react';
import axios from 'axios';
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// 1. Import the component
import HackerNewsList from "./HackerNewsList";

// 2. Tell the test suite to use the mocked axios instead of the real one
jest.mock('axios');

// remove the .skip-part to run these tests
describe.skip('HackerNewsList', () => {
    it('should fetch stories from the HN API and display them', async () => {

        // 3. Mocked 'stories'
        const stories = [
            { objectID: '1', title: 'Hello' },
            { objectID: '2', title: 'React' },
        ];

        // 4. use mockImplementationOnce on the mocked library. Resolve the promise
        // to deliver the results.
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { hits: stories } })
        );

        // 5. Now Render the Component
        render(<HackerNewsList />);

        // 6. Use the act() function because the state/component is updated if the
        // button is clicked/simulated.
        // From the documentation: "To prepare a component for assertions, wrap the code
        // rendering it and performing updates inside an act() call.
        // This makes your test run closer to how React works in the browser."
        // https://reactjs.org/docs/test-utils.html#act
        await act(async ()=>{
            await userEvent.click(screen.getByRole('button'));
        })

        // 7. Find the items in the screen and check the contents
        const items = await screen.findAllByRole('listitem');

        // 8. There should be 2 items, since we mocked them
        expect(items).toHaveLength(2);
    });
});
