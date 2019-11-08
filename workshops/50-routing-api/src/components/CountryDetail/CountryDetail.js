// CountryDetail.js - show details of a specific country
import React, {Component} from 'react'
import axios from "axios";

const detail_url = 'https://restcountries.eu/rest/v2/name';

// A pure presentational component
class CountryDetail extends Component {

    state = {
        country: ''
    };

    // Get the details for a specific country
    componentDidMount() {
        const {name} = this.props.match.params;

        axios.get(`${detail_url}/${name}`)
            .then(response => {
                this.setState({
                    country: response.data[0]
                })
            })
    }

    // Go to the home page from the button below
    goHome() {
        this.props.history.push('/')
    }

    render() {
        const country = this.state.country;
        return (
            <div>
                <h2>Details for {country.name}</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        name: {country.name}
                    </li>
                    <li className="list-group-item">
                        capital: {country.capital}
                    </li>
                    <li className="list-group-item">
                        population: {country.population}
                    </li>
                    <li className="list-group-item">
                        Region: {country.region}, {country.subregion}
                    </li>
                    <li className="list-group-item">
                        <img
                            className="img-fluid"
                            src={country.flag} alt={country.name}/>
                    </li>
                </ul>
                <button
                    className="btn btn-info"
                    onClick={() => this.goHome()}>
                    Go Home
                </button>
            </div>
        )
    }
}

export default CountryDetail
