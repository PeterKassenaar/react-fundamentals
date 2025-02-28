// App.js
import React, {Component} from 'react';

// Child components
import Counter from "./Counter/Counter";
import DisplayCounter from "./DisplayCounter/DisplayCounter";

// Our parent component - it holds the state for the child components
class App extends Component {

    state = {
        counter: 0
    };
    // above is equivalent to (but shorter than):
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0
    //     }
    // }


    incrementCounter(val) {
        const newCounter = this.state.counter + val;
        this.setState({
            counter: newCounter
        });
    }

    // workshop: implement decrementCounter()

    render() {
        return (<div className="container">
                <h2>Hello React</h2>
                <Counter increment={() => this.incrementCounter(40)} val={40}/>
                <DisplayCounter counter={this.state.counter}/>
            </div>
        )
    };
}

export default App;
