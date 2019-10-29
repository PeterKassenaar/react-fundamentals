import React from 'react'

// Counter is  a display component. It just shows two buttons. It receices the
// value and functionality for the buttons from the parent (<App />) component.
function Counter(props) {
    return (
        // Introducing React.Fragment
        // See https://reactjs.org/docs/fragments.html for details
        <React.Fragment>
            <button className="btn btn-primary"
                    onClick={() => props.increment(props.val)}>
				+{props.val}
            </button>
            <button className="btn btn-danger"
                    onClick={() => props.decrement(props.val)}>
                -{props.val}
            </button>
        </React.Fragment>
    )
}

export default Counter
