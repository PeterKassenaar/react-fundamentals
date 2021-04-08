import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import DetailMessage from './components/DetailMessage';
import Counter from './components/CounterNormal';
import CounterFunction from './components/CounterFunction';

const App: React.FunctionComponent = () => {
    let initialValue :number = 10;
    const [count, setCount] = React.useState(initialValue);

    function increment() {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }


    return (
        <div className="App">
            <header className="App-header">
                <HelloWorld/>
                <DetailMessage/>
                <Counter/>
                {/*<CounterFunction*/}
                {/*    count={count}*/}
                {/*    decrement={decrement}*/}
                {/*    increment={increment}/>*/}

                <p>
                    React and TypeScript .tsx
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
