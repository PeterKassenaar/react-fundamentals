import React, {Component} from 'react'

// Counter is now also a display component. It just shows two buttons. It receices the
// functionality for the buttons from the parent (<App />) component.
class Counter extends Component {

    inc(val) {
        this.props.increment(val)
    }

    render() {
        return (<div>
                <button className="btn btn-primary"
                        onClick={() => this.inc(this.props.val)}>
                    +{this.props.val}
                </button>
                <button className="btn btn-danger"
                        onClick={() => alert('Workshop: implement subtract of counter')}>-1
                </button>
            </div>
        )
    }
}

export default Counter
