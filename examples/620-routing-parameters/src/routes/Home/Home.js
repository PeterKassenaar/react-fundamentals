import React, {Component, useState} from 'react';
import countryData from "../../data/CountryData";
import {Link} from "react-router-dom";

const Home = () => {

    const [countries] = useState(countryData.countries);

    return (
        <div>
            <h1>Home Component</h1>
            <h2>List of countries</h2>
            <ul className="list-group">
                {countries.map(country =>
                    <li className="list-group-item"
                        key={country.id}>
                        <Link to={`/detail/${country.id}/${country.name}`}>
                            {country.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Home
