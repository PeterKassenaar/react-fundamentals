// App.js
import React, {Component} from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import CountryDetail from "./CountryDetail/CountryDetail";
import VacationPicker from './VacationPicker/VacationPicker'

// Data
import countryData from '../data/CountryData';

// Our parent component - it holds the state for the child components
class App extends Component {

    state = {
        countries: countryData.countries,
        currentCountry: countryData.countries[0]
    };

    selectCountry(country) {
        const newIndex = this.state.countries.indexOf(country);
        this.setState({
            currentCountry: this.state.countries[newIndex]
        })
    }

    // Render UI
    render() {
        return (
            <div className="container">
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
                    <div className="col">
                        <CountryDetail country={this.state.currentCountry}/>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;
