// CountryDetail.js - show details of a specific country
import React from 'react'

// A pure presentational component - now as a function based component
function CountryDetail (props) {

        const country = props.country;
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
                    {/*Some webpack magic below, to resolve the correct image*/}
                    <li className="list-group-item">
                        <img
                            className="img-fluid"
                            src={require(`../../img/countries/${country.img}` )} alt={country.name}/>
                    </li>
                </ul>
            </div>
        )
}

export default CountryDetail
