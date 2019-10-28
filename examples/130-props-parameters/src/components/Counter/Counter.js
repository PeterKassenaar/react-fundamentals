import React from 'react'

// Counter is now also a display component. It just shows two buttons. It receices the
// functionality for the buttons from the parent (<App />) component.
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
