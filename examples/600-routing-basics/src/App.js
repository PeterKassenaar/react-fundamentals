import React from 'react';
import Header from "./components/Header/Header";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes/Routes";


function App() {
    return (
        // You can (and will!) also find <BrowserRouter> in other places,
        // like in app.js or index.js, or other components in the app.
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
