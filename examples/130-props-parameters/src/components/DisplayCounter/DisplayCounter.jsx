// This component just renders the value of 'counter',
// which is passed in as a prop. These are also
// called 'view components'.
function DisplayCounter(props) {
	return(
		<h2>
			{props.counter}
		</h2>
	)
}
export default DisplayCounter
