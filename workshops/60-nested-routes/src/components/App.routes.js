// App.routes.js - holding the routes and components
// that this application uses
import React, {Component} from 'react'
import Home from "./Home/Home";
import {Redirect, Route} from "react-router";

class Routes extends Component {
    render() {
        return (
            <>
                <Route path="/" component={Home}/>
                {/*Route moved to Home Component as a nested route*/}
                {/*<Route path="/detail/:name" component={CountryDetail}/>*/}
                <Redirect to="/"/>
            </>
        );
    }
}

export default Routes;
