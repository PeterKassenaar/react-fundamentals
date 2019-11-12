// App.js
import React, {Component} from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import CountryDetail from "./CountryDetail/CountryDetail";
import VacationPicker from './VacationPicker/VacationPicker'
import CatPics from "./CatPics/CatPics";
import Contact from "./Contact/Contact";
import About from "./About/About";

// Data
import countryData from '../data/CountryData';

// Routing stuff
import MainNavigation from "./MainNavigation/MainNavigation";
import {BrowserRouter, Route, Switch} from "react-router-dom";


// Our parent component - it holds the state for the child components
class App extends Component {

    state = {
        countries: countryData.countries,
        currentCountry: countryData.countries[0]
    };

    // Selecting a new country and passing it to the Detail component
    selectCountry(country) {
        const newIndex = this.state.countries.indexOf(country);
        this.setState({
            currentCountry: this.state.countries[newIndex]
        })
    }

    // Render UI
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <MainNavigation/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/*Using a switch to loop over different routes.*/}
                            {/*Render the one that matches the route.*/}
                            {/* A <Switch> looks through its children <Route>s and
                                renders the first one that matches the current URL. */}
                            <Switch>
                                {/*Home route*/}
                                <Route exact path="/">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1>
                                                <img src={logo} alt="react logo" width={80}/>
                                                React vacation picker
                                            </h1>
                                            <VacationPicker
                                                select={(country) => this.selectCountry(country)}
                                                countries={this.state.countries}/>
                                        </div>
                                        <div className="col-md-6">
                                            <CountryDetail country={this.state.currentCountry}/>
                                        </div>
                                    </div>
                                </Route>
                                {/*Cats route*/}
                                <Route path="/cats">
                                    <CatPics/>
                                </Route>
                                {/*Contact  route*/}
                                <Route path="/contact">
                                    <Contact/>
                                </Route>
                                {/*About route*/}
                                <Route path="/about">
                                    <About/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    };
}

export default App;
