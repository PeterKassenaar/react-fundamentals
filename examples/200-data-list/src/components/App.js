// App.js
import React from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import VacationPicker from './VacationPicker/VacationPicker'

// Data
import countryData from '../data/CountryData';

// Our parent component - it holds the state for the child components
const App = () => {

    const [countries, setCountries] = React.useState(countryData.countries);

    // Render UI
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>
                        <img src={logo} alt="react logo" width={80}/>
                        React vacation picker
                    </h1>
                    <VacationPicker countries={countries}/>
                </div>
            </div>
        </div>
    )

}

export default App;
