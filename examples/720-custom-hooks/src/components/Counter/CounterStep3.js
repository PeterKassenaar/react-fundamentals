// CounterStep1.js - a simple counter component, using a state hook
import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";


function CounterStep3() {
    const [count, setCount] = useLocalStorage('my-counter', 200);

    return (
        <div>
            <h2>Counter - Step 3, using localStorage hook: {count}</h2>
            <button
                className="btn btn-primary"
                onClick={() => setCount(count + 1)}>Increment
            </button>
            <button
                className="btn btn-primary"
                onClick={() => setCount(count - 1)}>Decrement
            </button>
        </div>
    );
};

export default CounterStep3
