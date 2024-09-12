// App.js
import React, { useState } from 'react';
import logo from '../img/logo-react-small.png'
// Child components
import VacationPicker from './VacationPicker/VacationPicker'
// Data
import countryData from '../data/CountryData';
import AddCountries from "./AddCountries/AddCountries";

// Our parent component - it holds the state for the child components
const App = () => {
    const [countries] = useState(countryData.countries);

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
                <div className="col-md-6">
                    {/*Component below has *local* state, so no*/}
                    {/*state lifted up to this component.*/}
                    {/*All functionality is handled inside the component for clarity.*/}
                    {/*<AddCountries/>*/}
                </div>
            </div>
        </div>
    )
}

export default App;
