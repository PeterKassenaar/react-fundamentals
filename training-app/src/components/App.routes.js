// App.routes.js - main routes for the application
import React, {Component} from 'react';
import {Route, Redirect} from "react-router-dom";

// components for the routes
import VacationPicker from "./VacationPicker/VacationPicker";
import AddCountries from "./AddCountries/AddCountries";
import About from "./About/About";

class AppRoutes extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={VacationPicker}/>
                <Route path="/add" component={AddCountries}/>
                <Route path="/about" component={About}/>
                <Redirect to="/"/>
            </div>
        );
    }
}

export default AppRoutes;
