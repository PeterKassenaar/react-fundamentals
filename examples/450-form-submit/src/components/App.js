// App.js
import React, { useState } from 'react';
import logo from '../img/logo-react-small.png'
// Child components
import VacationPicker from './VacationPicker/VacationPicker';
import AddCountries from './AddCountries/AddCountries';
// Data
import countryData from '../data/CountryData';

// Our parent component - it holds the state for the child components
const App = () => {
    const [countries, setCountries] = useState(countryData.countries);

    // Adding a country - IN MEMORY ONLY!
    const addCountry = (country) => {
        setCountries([...countries, country]);
        // TODO: POST  the new country to a database
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
                    <VacationPicker countries={countries} />
                </div>
                <div className="col-md-6">
                    {/*We can add a country via the component below, it shows*/}
                    {/*an example of form submission. The added form is still IN-MEMORY only, */}
                    {/*so on restarting the application, the new countries are lost!*/}
                    <AddCountries submit={country => addCountry(country)}/>
                </div>
            </div>
        </div>
    );
}

export default App;
