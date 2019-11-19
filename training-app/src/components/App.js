// App.js
import React, {useState} from 'react';
import logo from '../img/logo-react-small.png'

// Child components
import CountryDetail from "./CountryDetail/CountryDetail";
import VacationPicker from './VacationPicker/VacationPicker'
import CounterStep1 from "./Counter/CounterStep1";

// Data
import countryData from '../data/CountryData';
import CounterStep2 from "./Counter/CounterStep2";
import CounterStep3 from "./Counter/CounterStep3";

// Our parent component - it holds the state for the child components
// We are using function components here, to demonstrate the usage
// of React Hooks: https://reactjs.org/docs/hooks-intro.html
function App() {

	// 1. Using a state hook here, only a getter. No setter.
	const [countries] = useState(countryData.countries);

	// 2. Directly using the variable defined in the line above
	const [currentCountry, setCountry] = useState(countries[0]);

	// 3. Helper function, selecting a new country and passing
	// it to the Detail component
	function selectCountry(country) {
		const newIndex = countries.indexOf(country);
		// 3a. Using the set Hook here to set the new state
		setCountry(countries[newIndex]);
	}

	// 4. Render UI, nothing special
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>
						<img src={logo} alt="react logo" width={80}/>
						React vacation picker
					</h1>
					<VacationPicker
						select={(country) => selectCountry(country)}
						countries={countries}/>
				</div>
				<div className="col-md-6">
					<CountryDetail country={currentCountry}/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<hr/>
					<CounterStep1/>
					<hr/>
					<CounterStep2/>
				</div>
			</div>
		</div>
	)
}

export default App;
