// CountryDetail.js - show details of a specific country
import React, {Component} from 'react'
import axios from "axios";

const detail_url = 'https://restcountries.eu/rest/v2/name';

// A pure presentational component
class CountryDetail extends Component {

    // we use a helper flag here to indicate if the component
    // is already mounted. It can prevent the dreaded "Warning: Can't call
    // setState (or forceUpdate) on an unmounted component." - warning, because
    // we are using asynchronous calls in the componentDidMount/DidUpdate.
    // More info: https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component
    hasMounted = false;

    state = {
        country: ''
    };

    // helper function
    getCountry(name) {
        axios.get(`${detail_url}/${name}`)
            .then(response => {
                if (this.hasMounted) {
                    this.setState({
                        country: response.data[0]
                    })
                }
            })
    }

    // Get the details for a specific country
    componentDidMount() {
        this.hasMounted = true;
        const {name} = this.props.match.params;
        this.getCountry(name)
    }

    // Update a country if a new route is chosen
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {name} = this.props.match.params;
        if (prevProps.match.params.name !== name) {
            this.getCountry(name)
        }
    }

    // Unregister this component and prevent calling this.setState() from
    // an unmounted component.
    componentWillUnmount() {
        this.hasMounted = false;
    }

    // Go to the home page from the button below.
    // *This component will now actually be removed/destroyed from the DOM
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
