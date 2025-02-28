import React, {Component} from 'react'

class DisplayCounter extends Component {
	// Optional constructor, to initialize the props for this component
	constructor(props) {
		super(props);
		this.state = {
			// optional: some local state
		}
	}

	// required render() function, to render the UI
	render() {
		return (
			<h2>
				{this.props.counter}
			</h2>
		)
	}
}

export default DisplayCounter
