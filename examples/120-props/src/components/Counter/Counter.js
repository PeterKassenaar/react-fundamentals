import React from 'react'

// Counter is now also a display (aka 'dumb') component.
// It just shows two buttons. It receives the
// functionality for the buttons from the
// parent (<App />) component.
function Counter(props) {
	return (
		<div>
			<button className="btn btn-primary"
					onClick={props.increment}>+1</button>
			<button className="btn btn-danger"
					onClick={() => alert('Workshop: implement subtract of counter')}>-1
			</button>
		</div>
	)
}

export default Counter
