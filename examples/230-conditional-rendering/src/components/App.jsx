// App.jsx
import React, {useState} from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import VacationPicker from './VacationPicker/VacationPicker'
import CountryDetail from "./CountryDetail/CountryDetail.jsx";

// Data
import countryData from '../data/CountryData';

// Our parent component - it holds the state for the child components
const App = () => {

    // 1. The data, or state in this component
    const [countries] = useState(countryData.countries);
    const [currentCountry, setCurrentCountry] = useState(countryData.countries[0]);

    // 2. Select a specific country
    const selectCountry = country => {
        const newIndex = countries.indexOf(country);
        setCurrentCountry(countries[newIndex]);
    }

    // 3. Render UI, return the component
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>
                        <img src={logo} alt="react logo" width={80}/>
                        React vacation picker
                    </h1>
                    {/*Upon selecting a country, a new currentCountry is set*/}
                    <VacationPicker
                        select={country => selectCountry(country)}
                        countries={countries}/>
                </div>
                <div className="col">
                    {/*currentCountry is passed as a prop to the detail component*/}
                    <CountryDetail country={currentCountry}/>
                </div>
            </div>
        </div>
    )
}

export default App;
