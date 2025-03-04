// AddCountries - Posting a country to its parent component by
// composing a 'real' country from various form fields.
import React, { useState } from 'react';

const AddCountries = ({submit}) => {
    // 0. We need state for this component to create a new country
    const [name, setName] = useState('');
    const [capital, setCapital] = useState('');
    const [details, setDetails] = useState('');
    const [cost, setCost] = useState('');

    // 1. updateCountry - updates the value of newCountry in the state
    // on every 'change' event (i.e. every keystroke).
    const updateCountry = (event) => {
        // Create constants, find out which control the
        // value comes from, by retrieving the 'name' attribute.
        // Then set the correct state property
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'capital':
                setCapital(value);
                break;
            case 'details':
                setDetails(value);
                break;
            case 'cost':
                setCost(value);
                break;
            default:
                break;
        }
    };

    // 2. submitCountry - create a new country and send it to the parent.
    // It uses the current value (i.e. the state) of the form input.
    const submitCountry = (event) => {
        // 0. prevent sending the form to the server
        event.preventDefault();
        // 1. create a new country, based on the state
        const newCountry = {
            id: Math.random(), // IRL not sufficient! As by coincidence the same random number might be generated, but good enough for demo...
            name: name,
            capital: capital,
            cost: cost,
            details: details,
        };
        // 2. send the country to the parent
        submit(newCountry);
    };

    // Render UI
    return (
        <form onSubmit={(event => submitCountry(event))}>
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
                   value={name}
                   onChange={updateCountry}
            />
            <input type="text"
                   name="capital"
                   placeholder="What is the capital?"
                   className="form-control"
                   value={capital}
                   onChange={updateCountry}
            />
            <textarea
                rows="4"
                name="details"
                placeholder="some details..."
                className="form-control"
                value={details}
                onChange={updateCountry}
            />
            <input type="number"
                   name="cost"
                   placeholder="Cost for a trip..."
                   className="form-control"
                   value={cost}
                   onChange={updateCountry}
            />
            <p>
                <input type="submit" className="btn btn-success"
                       value="Submit new country"/>
            </p>
        </form>
    );
};

export default AddCountries;
