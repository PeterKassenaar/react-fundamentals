// App.js
import React, {Component} from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import VacationPicker from './VacationPicker/VacationPicker'
import AddCountriesClass from "./AddCountries/AddCountriesClass";

// Data
import countryData from '../data/CountryData';
import AddCountries from "./AddCountries/AddCountries";

// Our parent component - it holds the state for the child components
class App extends Component {

    state = {
        countries: countryData.countries,
    };

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
                        {/*Component below has *local* state, so no*/}
                        {/*state lifted up to this component.*/}
                        {/*All functionality is handled inside the component for clarity.*/}
                        <AddCountries />
                        {/*<AddCountriesClass/>*/}
                    </div>
                </div>
            </div>
        )
    };
}

export default App;
