import {useState} from "react";

// 1. This is a component. It's simply an exported function.
//    Note: it is NOT valid JavaScript. It is JSX-syntax.
function Counter() {

	// 2. State, using React Hooks - here: initializing a counter. Using ES6-destructuring
	const [counter, setCounter] = useState(0);

	// 3. A function to update the counter, using the hook setCounter().
	//  The following will NOT work: counter = counter + 1;. We NEED setCounter to update the state.
	const updateCounter = () => setCounter(counter + 1);

	// 4. Return the UI of this component using JSX.
	return (
		<div>
			<button className="btn btn-primary" onClick={updateCounter}>+1</button>
			<button className="btn btn-danger" onClick={() => alert('Workshop: implement subtract of counter')}>-1
			</button>
			<h2>counter: {counter}</h2>
		</div>
	)
}

export default Counter
