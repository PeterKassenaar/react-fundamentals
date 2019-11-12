// App.js
import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./App.routes";

class App extends Component {

    render() {
        return (
            <BrowserRouter>

                            {/*The routes/components for the application*/}
                            <Routes/>

            </BrowserRouter>
        )
    }
}

export default App;
