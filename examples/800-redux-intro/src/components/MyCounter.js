// MyCounter.js - a simple component, talking to the store
import React from 'react';
import {connect} from "react-redux";

// 1. literally map the state to props for this component.
// We now want the state.counter property
const mapStateToProps = state => {
	return {counter: state.counter};
};




// 2. This is the actual component
const Counter = ({counter}) => (
		<h1>Current value: {counter}</h1>
);

// 3. The exported component is the result of
// connect, which takes mapStateToProps as a parameter,
// it is invoked with Counter as the argument for mapStateToProps
// I know - it looks funky!
// Documentation: https://react-redux.js.org/5.x/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const MyCounter = connect(mapStateToProps)(Counter);

export default MyCounter;
