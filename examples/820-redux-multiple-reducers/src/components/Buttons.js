import React, {useState} from 'react';
import {decrement, increment, reset} from "../actions";
import {connect} from "react-redux";

// 4. Using mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        // The increment action now receives a value from the textbox as payload.
        increment: (value) => dispatch(increment(value)),

        // The rest: not using payload!
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    };
};

// The component, here in a 'disconnected' state. It is
// exported below, connected with the store, with mapDispatchToProps as parameter.
const ConnectedButtons = (props) => {
    const [value, setValue] = useState('')

    // handle Enter key from textbox
    const handleKey = event => {
        if (event.key === 'Enter') {
            // call increment function on the props, pass in the numeric value of textbox
            props.increment(+value)
        }
    }
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
            <div>
                {/*The Texbox in which we can type the payload*/}
                <p>Update the counter with a value typed into the textbox.
                    Press Enter. This value is also known as <code>payload</code>.</p>
                <input type="number"
                       className="form-control-lg"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                       onKeyDown={(e) => handleKey(e)}
                       placeholder="number..."/>
            </div>
        </div>
    );
}
// Connecting the component to the store, using mapDispatchToProps
const Buttons = connect(null, mapDispatchToProps)(ConnectedButtons)
export default Buttons;
