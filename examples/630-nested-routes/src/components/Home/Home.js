import React, {Component} from 'react';
import countryData from "../../data/CountryData";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import CountryDetail from "../CountryDetail/CountryDetail";

class Home extends Component {
    state = {
        countries: countryData.countries
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <h1>Home Component</h1>
                    <hr/>
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
				<div className="col-md-6">
					{/*The nested routes*/}
					<Route path="/detail/:id/:name" component={CountryDetail}/>
				</div>
            </div>
        )
    }
}

export default Home
