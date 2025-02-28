import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const date = new Date().toLocaleDateString();
    const name = "Peter";

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Hello World</h1>
            <div className="card">
                <h3>Today is: {date}</h3>
                <h3>My name is {name}</h3>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
