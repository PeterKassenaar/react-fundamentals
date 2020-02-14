import React, {Component} from 'react';
import {addEmployee, decrement, increment, reset} from "../actions";
import {connect} from "react-redux";

// 4. Using mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
	return {
		add_employee: () =>dispatch(addEmployee()),
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()),// not using payload!
		reset: () => dispatch(reset())
	};
};

// The component, here in a 'disconnected' state. It is
// exported below, connected with the store, with mapDispatchToProps as parameter.
const ConnectedButtons = (props) => {
	return (
		<div>
			<button
				className="btn btn-primary"
				onClick={() => props.increment()}>
				+1
			</button>
			<button
				className="btn btn-success"
				onClick={() => props.decrement()}>
				-1
			</button>
			<button
				className="btn btn-danger"
				onClick={() => props.reset()}>
				Reset
			</button>
		</div>
	);
}
// Connecting the component to the store, using mapDispatchToProps
const Buttons = connect(null, mapDispatchToProps)(ConnectedButtons)
export default Buttons;
