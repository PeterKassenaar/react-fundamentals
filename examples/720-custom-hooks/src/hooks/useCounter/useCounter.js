// useCounter.js, a simple counter hook - using the same functionality
// and state in different components.
// Credits: https://is-hosted-email-api-prod.appspot.com/api/v2/public/email/5251465202368512/5385404138127360

// It has 3 responsibilities:
//  - Instantiate a state property.
// 	- Have a function responsible for incrementing the value of the state property.
// 	- Have a function responsible for decrementing the value of the state property.

import {useState} from 'react';

// receive the initial state as a prop, instead of hardcoding it to 0.
function useCounter(initialState) {

	const [count, setCount] = useState(initialState);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () =>{
		setCount(count - 1);
	};

	// ******* return items
	// 1. We'll have the useCounter Hook return the value of
	// the count state property being created and the increment()
	// and decrement() helper functions.

	// 2. useCounter returns an array where the first value
	// is the count state property and the second and third
	// are the helper functions to
	// change the value of count.
	return [count, increment, decrement];
}

export default useCounter
