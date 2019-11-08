import React from 'react';
import Header from "./components/Header/Header";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes/Routes";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <MainNavigation/>
                <Routes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
