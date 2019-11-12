// Home.js - a wrapper for the vacation picker
// it contains the Logic and the state of previously App.js
// (which now holds the <BrowserRouter> and <Route> elements
import React, {Component} from 'react';
import axios from "axios";
import logo from "../../img/logo-react-small.png";
import LoadingIndicator from "../Loader/LoadingIndicator";
import VacationPicker from "../VacationPicker/VacationPicker";
import CountryDetail from "../CountryDetail/CountryDetail";
import {Route} from "react-router";

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
                        <Route path="/detail/:name" component={CountryDetail}/>
                    </div>
                </div>
            </div>
        )
    };
}

export default Home;
