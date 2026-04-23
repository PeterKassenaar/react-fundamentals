// CountryDetail.js - show details of a specific country
import React from 'react'

// A pure presentational component
const CountryDetail = ({country}) => {
    return (
        <div>
            <h2>{country.name?.common}</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    name: {country.name?.common}
                </li>
                <li className="list-group-item">
                    capital: {country.capital?.[0]}
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
                        src={country.flags?.png || country.flags?.svg} alt={country.name?.common}/>
                </li>
            </ul>
        </div>
    )
}

export default CountryDetail
