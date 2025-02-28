import {useState} from "react";
import Counter from "./Counter/Counter.jsx";
import DisplayCounter from "./DisplayCounter/DisplayCounter.jsx";

// This is the 'top level component'. It is also called a 'smart' component
// because it holds the state and the logic to update the state. These are
// passed down as `props` to child components. Check this for yourself.
function App() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => setCounter(counter + 1);

    return (
        <div className="container">
            <h2>Hello React</h2>
            {/*We are now passing the value and functionality for*/}
            {/*the counter down to child components. */}
            <Counter increment={incrementCounter}/>
            <DisplayCounter counter={counter}/>
        </div>
    );
}

export default App
