// CounterStep1.js - a simple counter component, using a state hook
import React, {useState} from "react";

function CounterStep1() {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	return (
		<div>
			<h2>Counter - Step 1, inline state: {count}</h2>
			<button
				className="btn btn-success"
				onClick={increment}>Increment
			</button>
			<button
				className="btn btn-success"
				onClick={decrement}>Decrement</button>
		</div>
	);
};

export default CounterStep1
