
// 1. This is a so called View component. The component only
// shows the stuff that is passed in as props.
// In this case the `props` object has a passed in function `increment`.
function Counter(props) {
	return (
		<div>
			<button className="btn btn-primary"
					onClick={() => props.increment(props.val)}>
				+{props.val}
			</button>
			<button className="btn btn-danger"
					onClick={() => alert('Workshop: implement subtract of counter')}>-1
			</button>
		</div>
	)
}

export default Counter
