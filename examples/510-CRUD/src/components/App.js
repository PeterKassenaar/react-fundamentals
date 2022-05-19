// App.js
import React, {Component} from 'react';
import logo from '../img/logo-react-small.png'

// Axios, for http-stuff
import axios from 'axios';

// Child components
import VacationPicker from './VacationPicker/VacationPicker'
import AddCountry from "./AddCountries/AddCountry";
import LoadingIndicator from './Loader/LoadingIndicator';

// See package.json for port on json-server
const url = "http://localhost:3001/countries"

// Our parent component - it holds the state for the child components
class App extends Component {

	state = {
		error: null,
		isLoaded: false,
		countries: [],
		showAddCountry: false
	};

	// 0. load country data on startup
	componentDidMount() {
		this.getCountries();
	}

	// 1. CRUD-operations on countries using JSON-server

	// C - Create a new country
	addCountry(country) {
		// Post a new country
		axios.post(
			url,
			country,
			{
				headers: {'Content-Type': 'application/json', 'X-Token': '7292y392934.928346'} // could/should be in constant variable.
			}).then(res =>
			// To be sure: fetch new countries.
			// There ARE other ways of doing this: for instance Optimistic Update,
			// checking the returned http status code (should be 201 CREATED), using a Store
			// or Context and more.
			// Now - keep it simple, perform a new GET request.
			this.getCountries()
		)
	}

	// R - Retrieve all countries
	// Get all countries. Using Async/Await notation here.
	async getCountries() {
		const countries = await axios.get(url)
			.catch(err=> {
				console.log('ERROR! did you forget to start json-server? (npm run json-server)', err);
			});
		if(countries) {
			this.setState({
				countries: countries.data,
				isLoaded: true
			})
		}else {
			this.setState({
				isLoaded: true
			})
		}
	}

	getCountry(id){
		// Workshop - get a specific country and add it to the state.
	}

	// U - Update a country
	updateCountry(country){
		// Workshop - update a specific country.
		// There are multiple ways of doing this.
		//
		// For instance, create an EditCountry.js component
		// and pass the current country.
		// OR: pass it to AddCountry.js and also pass a
		// flag/new property that tells the
		// component to update an existing country instead
		// of adding a new one.
		//
		// Global command:
		// axios.put(url/country.id, newlyComposedCountry, headers:{...})
		//       .then(...)
		window.alert(`Workshop - Edit this country: ${country.name} `)
	}

	// D - Delete a country
	deleteCountry(country) {
		if (window.confirm(`Do you want to delete ${country.name}? It can NOT be undone`)) {
			axios.delete(`${url}/${country.id}`)
				.then(res => this.getCountries())
		}
	}

	// Toggle visibility of Adding/Editing a country
	toggleAddCountry() {
		this.setState({
			showAddCountry: !this.state.showAddCountry
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
						{/*Show a loading indicator as long as the countries are not loaded*/}
						{
							!this.state.isLoaded &&
							<LoadingIndicator/>
						}
						<VacationPicker
							remove={country => this.deleteCountry(country)}
							update={country => this.updateCountry(country)}
							countries={this.state.countries}/>
						<button
							className="btn btn-dark"
							onClick={() => this.toggleAddCountry()}>
							Add new Country
						</button>
					</div>
					<div className="col-md-6">
						{
							this.state.showAddCountry &&
								<AddCountry submit={country => this.addCountry(country)}/>
						}
					</div>
				</div>
			</div>
		)
	}
	;
}

export default App;
