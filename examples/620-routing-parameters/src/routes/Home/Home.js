import React, {Component} from 'react';
import countryData from "../../data/CountryData";
import {Link} from "react-router-dom";

class Home extends Component {

	state = {
		countries: countryData.countries
	}
	render() {
		return (
			<div>
				<h1>Home Component</h1>
				<h2>List of countries</h2>
				<ul className="list-group">
					{this.state.countries.map(country =>
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
}

export default Home
