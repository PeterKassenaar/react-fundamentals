// App.js
import React, {Component} from 'react';
import logo from '../img/logo-react-small.png';
import axios from 'axios';

// Child components
import VacationPicker from './VacationPicker/VacationPicker'
import LoadingIndicator from "./Loader/LoadingIndicator";
import CountryDetail from "./CountryDetail/CountryDetail";

// the API-URLs to get the data from
const url = 'https://restcountries.eu/rest/v2/all';
const detail_url = 'https://restcountries.eu/rest/v2/name';

// Our parent component - it holds the state for the child components
class App extends Component {

    state = {
        error: null,
        isLoaded: false,
        countries: [],
        country: ''
    };

    // using the componentDidMount() hook to fetch the countries
    // from the RestCountries API, available via the global URL
    async componentDidMount() {
        const response = await axios.get(url)
        this.setState({
            isLoaded: true,
            countries: response.data
        })
    }

    // get details for a specific country
    getCountry(name) {
        axios.get(`${detail_url}/${name}`)
            .then(response => {
                this.setState({
                    country: response.data[0]
                })
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
                            countries={this.state.countries}
                            select={(country) => this.getCountry(country)}
                        />
                    </div>
                    <div className="col-md-6">
                        {
                            this.state.country &&
                            <CountryDetail country={this.state.country}/>
                        }
                    </div>
                </div>
            </div>
        )
    };
}

export default App;
