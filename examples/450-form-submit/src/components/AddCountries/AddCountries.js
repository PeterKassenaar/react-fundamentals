// AddCountries - Posting a country to its parent component by
// composing a 'real' country from various form fields.
import React, {Component} from 'react';

class AddCountries extends Component {
    // 0. We need state for this component to create a new country
    state = {
        name: '',
        capital: '',
        details: '',
        cost: ''
    };

    // 1. updateCountry - updates the value of newCountry in the state
    // on every 'change' event (i.e. every keystroke).
    updateCountry(event) {
        // Create constants, find out which control the
        // value comes from, by retrieving the 'name' attribute.
        // Then set the correct state property
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    // 2. addCountry - create a new country and send it to the parent.
    // It uses the current value (i.e. the state) of the form input.
    submitCountry(event) {
        // 0. prevent sending the form to the server
        event.preventDefault();

        // 1. create a new country, based on the state
        const newCountry = {
            name: this.state.name,
            capital: this.state.capital,
            cost: this.state.cost,
            details: this.state.details
        };

        // 2. send the country to the parent
        this.props.submit(newCountry)
    }

    render() {
        return (
            <form onSubmit={(e) => this.submitCountry(e)}>
                <h2>New Countries</h2>
                {/*This input is a Controlled Component, because it's */}
                {/*value is driven from the state. Controlled components */}
                {/*do _need_ an onChange handler. Otherwise the components value*/}
                {/*would be read-only (unless of course you want to create a read-only component ;-)*/}
                {/*We need a textbox*/}
                <input type="text"
                       name="name"
                       placeholder="Country name..."
                       className="form-control"
                       value={this.state.name}
                       onChange={(event => this.updateCountry(event))}
                />
                <input type="text"
                       name="capital"
                       placeholder="What is the capital?"
                       className="form-control"
                       value={this.state.capital}
                       onChange={(event => this.updateCountry(event))}
                />
                <textarea
                    rows="4"
                    name="details"
                    placeholder="some details..."
                    className="form-control"
                    value={this.state.details}
                    onChange={(event => this.updateCountry(event))}
                />
                <input type="number"
                       name="cost"
                       placeholder="Cost for a trip..."
                       className="form-control"
                       value={this.state.cost}
                       onChange={(event => this.updateCountry(event))}
                />
                <p>
                    <input type="submit" className="btn btn-success"
                           value="Submit new country"/>
                </p>
            </form>
        );
    }
}

export default AddCountries;
