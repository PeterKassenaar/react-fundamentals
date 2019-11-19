// CounterStep2.js - a simple counter component, now using a
// special useCounter Hook. In order to avoid duplication of code
// in the -Step1.js file.

import React from "react";
import useCounter from "../../hooks/useCounter/useCounter";

// For any component that needs to have
// the counter functionality, they can now
// utilize the useCounter Hook.
function CounterStep2() {

	// using the hook (we can call a hook multiple times. It's
	// just a function!
	const [count, increment, decrement] = useCounter(10);
	const [count2, plus, minus] = useCounter(103);

	return (
		<div>
			<h2>Counter - Step 2, using custom hook: {count}</h2>
			<button
				className="btn btn-success"
				onClick={increment}>Increment
			</button>
			<button
				className="btn btn-success"
				onClick={decrement}>Decrement
			</button>
			<hr/>
			<h2>We can reuse the custom hook w/ different value: {count2}</h2>
			<button
				className="btn btn-success"
				onClick={plus}>Increment
			</button>
			<button
				className="btn btn-success"
				onClick={minus}>Decrement
			</button>
			count2: {count2.toString()}
		</div>
	);
};

export default CounterStep2
