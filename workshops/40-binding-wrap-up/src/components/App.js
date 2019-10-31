// App.js
import React, {Component} from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import CountryList from "./CountryList/CountryList";
import CountryDetail from "./CountryDetail/CountryDetail";

// Data
import countryData from '../data/CountryData';

// Our parent component - it holds the state for the child components
class App extends Component {

    state = {
        countries: countryData.countries,
        currentCountry: countryData.countries[0],
        countryIndex:0,
        showDetails: true
    };

    // helper functions
    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    prevCountry() {
        // this will *not* work
        // this.state.currentCountry = this.state.data[++this.state.countryIndex];
        // from the docs: https://reactjs.org/docs/faq-state.html

        // So, use setState(). Optional: pass in the current state object.
        // First, calculate new index position in array
        let newIndex = this.state.countryIndex > 0
            ? this.state.countryIndex - 1
            : countryData.countries.length - 1;
        this.setState({
            countryIndex: newIndex,
            currentCountry: this.state.countries[newIndex]
        })
    }

    nextCountry() {
        // calculate new index position in array
        let newIndex = this.state.countryIndex === countryData.countries.length - 1
            ? 0
            : this.state.countryIndex + 1;
        this.setState({
            countryIndex: newIndex,
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
                        {/*<VacationPicker*/}
                        {/*    toggle={() => this.toggleDetails()}*/}
                        {/*    select={(country) => this.selectCountry(country)}*/}
                        {/*    countries={this.state.countries}/>*/}
                        {/*<CountryList country={this.state.currentCountry}/>*/}
                                <CountryList
                                    country={this.state.currentCountry}
                                    next={() => this.nextCountry()}
                                    prev={() => this.prevCountry()}
                                    toggle={() => this.toggleDetails()}/>
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

                {/*    </div>*/}

                {/*</div>*/}
            </div>
        )
    };
}

export default App;
