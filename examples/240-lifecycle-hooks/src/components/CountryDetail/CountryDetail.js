// CountryDetail.js - show details of a specific country
import React, {Component} from 'react'

class CountryDetail extends Component {

    state = {
        currentCountry: {},
        prevCountry: {}
    };

    // 1. Mounting lifecycle hook
    componentDidMount() {
        console.log('CountryDetail :: componentDidMount() called...');
        this.setState({
            currentCountry: this.props.country
        })
    }

    // 2. Update lifecycle hook
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('CountryDetail updated!');
        console.log({prevProps}, {prevState});
        // Need to wrap in an if-statement, otherwise
        // there'll be an infinite loop.
        // There even might be a better solution (?), b/c now the
        // component is rendered twice.
        if (prevProps.country.name !== this.props.country.name) {
            this.setState({
                currentCountry: this.props.country,
                prevCountry: prevProps.country
            })
        }
    }

    // 3. Unmount lifecycle hook
    componentWillUnmount() {
        console.log('CountryDetail :: Component unmounted...');
        // flush caches, close db-connections, update localStorage, etc.
    }

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
                    <li className="list-group-item">
                        <img
                            className="img-fluid"
                            src={require(`../../img/countries/${country.img}`)} alt={country.name}/>
                    </li>
                    {/*Adding the badge list item conditionally (Like a Vue Computed Property). */}
                    {country.cost > 4000 ?
                        <li className="list-group-item">
                            <span className="badge badge-warning">Expensive!</span>
                        </li>
                        : ''
                    }
                </ul>
                {/*Result of the lifecycle hooks*/}
                <h3>Current country: {this.state.currentCountry.name}</h3>
                <h3>Previous country: {this.state.prevCountry.name}</h3>

            </div>
        )
    }
}

export default CountryDetail
