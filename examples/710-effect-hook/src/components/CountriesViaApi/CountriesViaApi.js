// countries via API. Fetch countries and add them to state using the useEffect hook

import React, {useState, useEffect}from 'react';

import axios from 'axios'
import styles from "./CountriesViaApi.module.css";

const url = 'https://restcountries.eu/rest/v2/all';

function CountriesViaApi(props) {
	// State
	const [countries, setCountries] = useState([]);

	// Hook
	useEffect(() => {
		axios.get(url)
			.then(response => {
				setCountries(response.data);
			});
		return () => {
			// clean up...
		};
	}, []); // do it only one time

	return (
		<div>
			<ul className="list-group">
				{countries.map(country =>
					<li className="list-group-item"
						key={country.name}
						id={country.name}
						title={country.name}
					>
						<img src={country.flag} alt="flag" className={styles.imgFlag}/>
						<h3>{country.name}</h3>
						<p>{country.capital}</p>
					</li>
				)}
			</ul>
		</div>
	);
}

export default CountriesViaApi;
