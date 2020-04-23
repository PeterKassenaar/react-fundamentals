// MyCounter.js - a simple component, talking to the store
import React from 'react';
import {connect} from "react-redux";

// Note: since we now use multiple reducers, we need to tell the function
// from which reducer it should pull the state. In our case, the counterReducer
const mapStateToProps = state => {
    console.log(state); // some logging, to inspect the complete state
    return {
        counter: state.counterReducer.counter,
    };
};

// 2. This is the actual component, but only for internal use! We don't export it.
const Counter = ({counter}) => (
    <div>
        <h1>Current value: {counter}</h1>
    </div>
);

// 3. The exported component is the result of
// connect, which takes mapStateToProps as a parameter,
// it is invoked with Counter as the argument for mapStateToProps
// I know - it looks funky!
// Documentation: https://react-redux.js.org/5.x/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const MyCounter = connect(mapStateToProps)(Counter);

export default MyCounter;


