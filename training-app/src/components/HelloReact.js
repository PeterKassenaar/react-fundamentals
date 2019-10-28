import React from 'react'
import Counter from "./Counter/Counter";

// Example with multiple components
function HelloReact() {
	return (
		<div className="container">
			Hello React!
			{/*Another imported component*/}
			<Counter/>
		</div>
	)

}

export default HelloReact
