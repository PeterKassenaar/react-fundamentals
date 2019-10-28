// CountryList.js - cycle through Countries and show/hide details

import React, {Component} from 'react'

class CountryList extends Component {



    render() {
        // helper constants
        const isOnSale = this.props.country.cost < 1000;
        const isExpensive = this.props.country.cost > 4000;
        const country = this.props.country;

        return (
            <>
                <div className="alert alert-warning text-center">
                    <h1>{country.name}</h1>
                    <h2>Capital: {country.capital}</h2>
                    {/*Conditional rendering. See also https://reactjs.org/docs/conditional-rendering.html */}
                    {isOnSale && <span className="badge badge-light">Sale!</span>}
                    {isExpensive && <span className="badge badge-danger">(expensive)</span>}
                </div>
                <button onClick={this.props.prev} className="btn btn-success"> &lt;&lt; Previous</button>
                <button onClick={this.props.next} className="btn btn-success">Next &gt;&gt;</button>
                <button className="btn btn-primary" onClick={this.props.toggle}>Toggle Details</button>
            </>
        )
    }
}

export default CountryList
