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
import FileNotFound from "./FileNotFound/FileNotFound";

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
                            <Switch>
                                {/*Home route - a bit more complicated, b/c it renders 2 components */}
                                {/*The render() attribute takes a function as a parameter and inside the */}
                                {/*function body you place the content/component(s) to be rendered. You */}
                                {/*can pass attributes and props to components as usual*/}
                                <Route exact path="/" render={() => {
                                    return <div className="row">
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
                                }}/>

                                {/* Cats route*/}
                                <Route path="/cats" render={() => <CatPics/>}/>

                                {/* Contact  route*/}
                                <Route path="/contact" render={() => <Contact/>}/>

                                {/* About route*/}
                                <Route path="/about" render={() => <About/>}/>

                                {/* Catch-all / 404-route*/}
                                {/*Just don't give the Route a path, it will render if none*/}
                                {/*of the above options was matched*/}
                                <Route component={FileNotFound}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
