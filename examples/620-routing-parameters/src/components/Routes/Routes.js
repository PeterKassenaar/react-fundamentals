import React, {Component} from 'react';
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import CountryDetail from "../CountryDetail/CountryDetail";

class Routes extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>

                {/*Creating the Detail route with params below: */}
                <Route path="/detail/:id/:name" component={CountryDetail}/>
                <Redirect to="/"/>
            </>
        );
    }
}

export default Routes;
