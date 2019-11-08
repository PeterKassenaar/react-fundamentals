// Home.js - a wrapper for the vacation picker
// it contains the Logic and the state of previously App.js
// (which now holds the <BrowserRouter> and <Route> elements
import React, {Component} from 'react';
import axios from "axios";
import logo from "../../img/logo-react-small.png";
import LoadingIndicator from "../Loader/LoadingIndicator";
import VacationPicker from "../VacationPicker/VacationPicker";

// the API-URL to get the data from
const url = 'https://restcountries.eu/rest/v2/all';

// Our parent component - it holds the state for the child components
class Home extends Component {

    state = {
        error: null,
        isLoaded: false,
        countries: []
    };

    // using the componentDidMount() hook to fetch the countries
    // from the RestCountries API, available via the global URL
    componentDidMount() {
        axios.get(url)
            .then(response => {
                this.setState({
                    isLoaded: true,
                    countries: response.data
                })
            })
    }

    // Using History Pushstate API from the browser/router to
    // navigate to the Detail Component
    getCountry(name) {
        const route = `/detail/${name}`;
        this.props.history.push(route);
    }

    // Render UI
    render() {
        return (
            // Using a React Fragment here
            <>
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
            </>
        )
    };
}

export default Home;
