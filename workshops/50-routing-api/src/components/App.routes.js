// App.routes.js - holding the routes and components
// that this application uses
import React, {Component} from 'react'
import Home from "./Home/Home";
import CountryDetail from "./CountryDetail/CountryDetail";
import {Redirect, Route} from "react-router";

class Routes extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={Home}/>
                <Route path="/detail/:name" component={CountryDetail}/>
                <Redirect to="/"/>
            </>
        );
    }
}

export default Routes;
