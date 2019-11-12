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
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>

                {/*Route below not used anymore, b/c the nested route is now a child*/}
                {/*inside the Home Component*/}
                {/*<Route path="/detail/:id/:name" component={CountryDetail}/>*/}
                <Redirect to="/"/>
            </>
        );
    }
}

export default Routes;
