// App.js
import React from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import CountryDetail from "./CountryDetail/CountryDetail";
import VacationPicker from './VacationPicker/VacationPicker'

// Data
import countryData from '../data/CountryData';

// Our parent component - it holds the state for the child components
const App = () => {

    const [countries] = React.useState(countryData.countries);
    const [currentCountry, setCurrentCountry] = React.useState(countryData.countries[0]);

    // Selecting a new country and passing it to the Detail component
    const selectCountry = country => {
        const newIndex = countries.indexOf(country);
        setCurrentCountry(countries[newIndex]);
    }

    // Render UI
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>
                        <img src={logo} alt="react logo" width={80}/>
                        React vacation picker
                    </h1>
                    <VacationPicker
                        select={(country) => selectCountry(country)}
                        countries={countries}/>
                </div>
                <div className="col">
                    <CountryDetail country={currentCountry}/>
                </div>
            </div>
        </div>
    )
}

export default App;
