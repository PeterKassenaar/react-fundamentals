// CountryDetail.js - show details of a specific country
import React, {Component} from 'react'

// A pure presentational component
class CountryDetail extends Component {

    render() {
        const country = this.props.country;
        return (
            <div>
                <h2>{country.name}</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        id: {country.id}
                    </li>
                    <li className="list-group-item">
                        name: {country.name}
                    </li>
                    <li className="list-group-item">
                        capital: {country.capital}
                    </li>
                    <li className="list-group-item">
                        details: {country.details}
                    </li>
                </ul>
            </div>
        )
    }
}

export default CountryDetail
