// App.js
import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./App.routes";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/*The routes/components for the application*/}
                            <Routes/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
