// App.js
import React, {Component} from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import VacationPicker from './VacationPicker/VacationPicker'

// Data
import countryData from '../data/CountryData';
import AddCountries from "./AddCountries/AddCountries";

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
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>
                            <img src={logo} alt="react logo" width={80}/>
                            React vacation picker
                        </h1>
                        <VacationPicker countries={this.state.countries}/>
                    </div>
                    <div className="col-md-6">
                        {/*We can add a country via the component below, it shows*/}
                        {/*an example of form submission. The added form is still in-memory only, */}
                        {/*so on restarting the application, the new countries are lost!*/}
                        <AddCountries submit={(country) => this.addCountry(country)}/>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;
