// Counter.tsx
import React, {useState} from "react";

interface CounterProps {
    title: string;
    counter: number
}


const Counter = (props: CounterProps) => {
    const [counter, setCounter] = useState(props.counter)
    const increment = () => {
        setCounter(value => value + 1);
    }
    const decrement = () => {
        setCounter(value => value -1);
    }
    const reset = () => setCounter(0);
    return (
        <>
            <h1>Hello {props.title}</h1>
            Current value of Counter is {counter}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default Counter
