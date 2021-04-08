import * as React from 'react'
import {ICounter} from '../common/ICounter';

const CounterFunction: React.FunctionComponent<ICounter> = (props) => {
    return (
        <>
            <h1>CounterFunction props.count: {props.count}</h1>
            <button onClick={()=>props.increment()}>Increment</button>
            <button onClick={() =>props.decrement()}>Decrement</button>
        </>
    )
}
export default CounterFunction;
