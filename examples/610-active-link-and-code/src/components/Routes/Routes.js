import React, {Component} from 'react';
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import {Redirect, Route} from "react-router-dom";

class Routes extends Component {
    render() {
        return (
            <>
                {/*Note the 'exact' attribute on Home, otherwise it would render twice*/}
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Redirect to="/"/>
            </>
        );
    }
}

export default Routes;
