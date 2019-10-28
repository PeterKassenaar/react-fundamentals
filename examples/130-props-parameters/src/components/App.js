// App.js
import React from 'react';

// Child components
import Counter from "./Counter/Counter";
import DisplayCounter from "./DisplayCounter/DisplayCounter";

// Our parent component - it holds the state for the child components
function App() {
    const [counter, setCounter] = React.useState(0);

    const incrementCounter = (val) => setCounter(counter + val);

    return (
        <div className="container">
            <h2>Hello React</h2>
            {/*We are now passing the value and functionality for*/}
            {/*the counter down to child components. */}
            <Counter increment={incrementCounter} val={30} />
            <DisplayCounter counter={counter}/>
        </div>
    );
}

export default App;
