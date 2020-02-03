import React from 'react'

// This component is the same as before. No
// changes needed b/c the counter just comes in as
// a value to print.
function DisplayCounter(props) {
	return(
		<h2>
			{props.counter}
		</h2>
	)
}
export default DisplayCounter
