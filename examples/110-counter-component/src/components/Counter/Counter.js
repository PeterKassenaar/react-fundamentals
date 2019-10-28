import React from 'react'

function Counter() {

	const [counter, setCounter] = React.useState(0);

	const updateCounter = () => setCounter(counter + 1);

	return (
		<div>
			<button className="btn btn-primary" onClick={updateCounter}>+1</button>
			<button className="btn btn-danger" onClick={() => alert('Workshop: implement subract of counter')}>-1
			</button>
			<h2>counter: {counter}</h2>
		</div>
	)
}

export default Counter
