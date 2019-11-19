// CounterStep3.js - a simple counter component, now using a
// special useCounter Hook. In order to avoid duplication of code
// in the -Step1.js file.

import React from "react";
import useCounter from "../../hooks/useCounter/useCounter";

// For any component that needs to have
// the counter functionality, they can now
// utilize the useCounter Hook.
function CounterStep3() {

	// using the hook (we can call a hook multiple times. It's
	// just a function!
	const [count, {increment, decrement}] = useCounter(10);

	return (
		<div>
			<h2>Counter - Step 3, using custom hook: {count}</h2>
			<button
				className="btn btn-success"
				onClick={increment}>Increment
			</button>
			<button
				className="btn btn-success"
				onClick={decrement}>Decrement
			</button>
			<hr/>
		</div>
	);
};

export default CounterStep3;
