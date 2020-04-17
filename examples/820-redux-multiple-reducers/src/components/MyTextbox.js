import React, {useState} from 'react';
import {connect} from "react-redux";
import {resetMessage, setMessage} from "../store/actions/message-actions";

// In this component; using *both* mapStateToProps and mapDispatchToProps!

const mapStateToProps = state => {
    return {
        msg: state.messageReducer.msg
    };
};


// mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        // The increment action now receives a value from the textbox as payload.
        setMessage: (value) => dispatch(setMessage(value)),
        resetMessage: () => dispatch(resetMessage())
    };
};

const ConnectedTextBox = (props) => {
    const [msg, setMsg] = useState('')

    // handle Enter key from textbox
    const handleKey = event => {
        if (event.key === 'Enter') {
            // Set the message in the store
            props.setMessage(msg);
            setMsg('')
        }
    }
    return (
        <div>
            <h2>Type a message: </h2>
            <input type="text"
                   className="form-control-lg"
                   value={msg}
                   onChange={(e) => setMsg(e.target.value)}
                   onKeyDown={(e) => handleKey(e)}
                   placeholder="message..."/>
            <button className="btn btn-danger"
                    onClick={() => props.resetMessage()}>
                Reset
            </button>
            <h3>Current message: {props.msg}</h3>
        </div>
    );
}

// using mapStateToProps and mapDispatchToProps in the same connect() function.
const MyTextbox = connect(mapStateToProps, mapDispatchToProps)(ConnectedTextBox)

export default MyTextbox;
