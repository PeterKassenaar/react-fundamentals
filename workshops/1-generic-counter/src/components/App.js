// App.js
import React from 'react';

// Child components
import Counter from "./Counter/Counter";
import DisplayCounter from "./DisplayCounter/DisplayCounter";

// Our parent component - it holds the state for the child components
function App() {
    const [counter, setCounter] = React.useState(0);

    // increment
    const incrementCounter = val => setCounter(counter + val);

    // decrement
    const decrementCounter = val => setCounter(counter - val);

    // User Interface
    return (
        <div className="container">
            <h2>Workshop #1 - Generic Counter</h2>
            <Counter
                decrement={decrementCounter}
                increment={incrementCounter}
                val={1}/>
            <Counter
                decrement={decrementCounter}
                increment={incrementCounter}
                val={5}/>
            <Counter
                decrement={decrementCounter}
                increment={incrementCounter}
                val={10}/>
            <Counter
                decrement={decrementCounter}
                increment={incrementCounter}
                val={50}/>
            <DisplayCounter counter={counter}/>
            <button
                className="btn btn-warning"
                onClick={() => setCounter(0)}>Reset
            </button>
        </div>
    );
}

export default App;
