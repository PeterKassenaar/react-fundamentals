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
        currentCountry: countryData.countries[0],
        // new property: show or hide details
        showDetails: true
    };

    // helper functions
    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    selectCountry(country) {
        const newIndex = this.state.countries.indexOf(country);
        this.setState({
            currentCountry: this.state.countries[newIndex]
        })
    }

    //**********************
    // Goal of the workshop:
    // Toggle the 'favorite' property of a country
    //**********************
    toggleFavorite(country) {
        // 1. find the country in the array
        const index = this.state.countries.indexOf(country);
        // 2. Toggle the fav-state for the current country
        const newCurrentCountry = {...this.state.currentCountry, favorite: !this.state.currentCountry.favorite};
        // 3. Create new array of countries and replace the currentCountry (w/ the updated favorite property)
        let newCountries = [...this.state.countries];
        newCountries[index] = newCurrentCountry;

        // 4. update the application state
        this.setState({
            currentCountry: newCurrentCountry,
            countries: newCountries
        });
        // 5. Sincere question:
        // The above code works, but can this be done quicker/smarter?
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
                            toggle={() => this.toggleDetails()}
                            select={(country) => this.selectCountry(country)}
                            countries={this.state.countries}/>
                    </div>
                    <div className="col">
                        {
                            // conditional rendering: only
                            // render <CountryDetail /> if showDetails === true
                            this.state.showDetails &&
                            <CountryDetail
                                favorite={(country) => this.toggleFavorite(country)}
                                country={this.state.currentCountry}/>
                        }
                    </div>
                </div>
            </div>
        )
    };
}

export default App;
