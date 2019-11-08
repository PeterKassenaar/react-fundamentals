// CountryDetail - fetching parameters from the URL and retrieving the correct country
import React, {Component} from 'react';
import countryData from "../../data/CountryData";

// import '../../img/countries/amsterdam.jpg'

class CountryDetail extends Component {
    // We are passing in a country ID and name, so we need (at least)
    // two state parameters.
    state = {
        id: null,
        name: '',
        countries: countryData.countries,
        country: ''
    };

    // retrieve id and name from the querystring
    // Note the usage of ES6 destructuring here and
    // composing the setState() object
    componentDidMount() {
        const {id, name} = this.props.match.params;
        const country = this.state.countries.find(c => c.id === +id);
        this.setState({
            id,
            name,
            country
        })
    }

    render() {
        return (
            <div>
                <h3>CountryDetail works!</h3>
                <p>Requested country id: {this.state.id}</p>
                <p>Requested country name: {this.state.name}</p>
                {
                    // Using conditional rendering here, b/c state is async
                    // Otherwise it throws an error 'cannot read property id of undefined'
                    this.state.country &&
                    <ul className="list-group">
                        <li className="list-group-item">
                            id: {this.state.country.id}
                        </li>
                        <li className="list-group-item">
                            name: {this.state.country.name}
                        </li>
                        <li className="list-group-item">
                            capital: {this.state.country.capital}
                        </li>
                        <li className="list-group-item">
                            details: {this.state.country.details}
                        </li>
                        {/*Some webpack magic below, to resolve the correct image*/}
                        <li className="list-group-item">
                            <img
                                className="img-fluid"
                                src={require(`../../img/countries/${this.state.country.img}`)}
                                alt={this.state.country.name}/>
                        </li>
                    </ul>
                }
            </div>
        );
    }
}

export default CountryDetail;
