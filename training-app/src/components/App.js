// App.js
import React, {Component} from 'react';
import logo from '../img/logo-react-small.png'

// Router stufff
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import MainNavigation from "./MainNavigation/MainNavigation";

// Child components
import VacationPicker from './VacationPicker/VacationPicker'

// Data
import countryData from '../data/CountryData';
import AddCountries from "./AddCountries/AddCountries";
import About from "./About/About";
// import AppRoutes from "./App.routes";

// Our parent component - it holds the state for the child components
class App extends Component {

    state = {
        countries: countryData.countries,
    };

    addCountry(country) {
        this.setState({
            countries: [...this.state.countries, country]
        })
        // TODO: POST  the new country to a database
    }

    // Render UI
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <h1>
                        <img src={logo} alt="react logo" width={80}/>
                        React vacation picker
                    </h1>
                    <div className="row">
                        <MainNavigation/>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Route path="/" exact render={() => <VacationPicker countries={this.state.countries}/>}/>

                            <Route path="/add"
                                   render={() => <AddCountries submit={(country) => this.addCountry(country)}/>}/>
                            <Route path="/about" component={About}/>
                            <Redirect to="/"/>
                        </div>
                        <div className="col-md-6">
                            {/*We can add a country via the component below, it shows*/}
                            {/*an example of form submission. The added form is still in-memory only, */}
                            {/*so on restarting the application, the new countries are lost!*/}
                            {/*<AddCountries submit={(country) => this.addCountry(country)}/>*/}
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    };
}

export default App;
