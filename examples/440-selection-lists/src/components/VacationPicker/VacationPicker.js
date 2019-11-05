// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using class based components here.
import React, {Component} from 'react';

class VacationPicker extends Component {

    // Local state for VacationPicker, holding an array with visited countries.
    // In Real life apps you would lift this state up to the parent component.
    // The state now also holds prices that are shown in the selection list.
    // By default the currently selected price is 1000.
    state = {
        visitedCountries: [],
        prices: [1000, 2000, 3000, 4000, 5000],
        price: 1000
    };

    updatePrice(event) {
        console.log('selected value:', event.target.value);
        this.setState({
            price: event.target.value
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.countries.map(country =>
                        <li
                            // conditionally add class name. We're using the Bootstrap class .active here,
                            // but of course you can create any class you like. Note the space ' ' after list-group-item!
                            className={'list-group-item ' + (this.state.price > country.cost ? 'active' : '')}
                            key={country.id}
                            id={country.id}
                            title={country.details}>
                            {country.name}
                        </li>
                    )}
                </ul>
                {/*Selection list*/}
                <h2>Mark countries cheaper than...</h2>
                <div className="form-group">
                    <select
                        value={this.state.price}
                        onChange={(e) => this.updatePrice(e)}
                        className="form-control"
                        name="select"

                    >
                        {
                            this.state.prices.map(price =>
                                <option
                                    key={price}
                                    value={price}>
                                 	   {price}
                                </option>
                            )
                        }
                    </select>
                </div>
            </div>
        );
    }
}

export default VacationPicker
