// AddCountriesClass.js - the same component as AddCountries.js, but now
// in a function-style syntax
import React, {useState} from "react";

const AddCountriesFn = () => {
    // 0. We need state for this component. Our country is now an OBJECT instead of
    // two different state properties.
    const [country, setCountry] = useState({
        name: '',
        population: ''
    });
    const [newCountries, setNewCountries] = useState([]);

    // 1. updateCountry - updates the value of newCountry in the state
    // on every 'change' event (i.e. every keystroke).
    const updateCountry = event => {
        // Create constants, find out which control the
        // value comes from, by retrieving the 'name' attribute.
        // Then set the correct state property
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
        setCountry({
            ...country, // don't forget to first spread in the existing country..
            [name]: value // ..then update the correct property for this field
        })


    }

    // 2. addCountry - add a new country to the array of countries.
    // It uses the current value (i.e. the state) of the textbox.
    const addCountry = () => {
        // 1. create a new country, based on the state
        const newCountry = {
            name: country.name,
            population: country.population
        };
        // 2. set the state - and reset the individual fields.
        // Use the spread operator to first add the existing countries to the new array.
        setNewCountries([...newCountries, newCountry])
        setCountry({
            name: '',
            population: '',
        })
    }

    // ***********************
    // UI - output of this component
    // *****************
    return (
        <div>
            <h2>New Countries - Function style component</h2>
            {/*This input is a Controlled Component, because it's */}
            {/*value is driven from the state. Controlled components */}
            {/*do _need_ an onChange handler. Otherwise the components value*/}
            {/*would be read-only (unless of course you want to create a read-only component ;-)*/}
            {/*We need a textbox*/}
            <input type="text"
                   name="name"
                   placeholder="New country..."
                   className="form-control-lg"
                   value={country.name}
                   onChange={event => updateCountry(event)}
            />
            <input type="text"
                   name="population"
                   placeholder="Population..."
                   className="form-control-lg"
                   value={country.population}
                   onChange={event => updateCountry(event)}
            />
            <button className="btn btn-success"
                    onClick={() => addCountry()}>
                Add Country
            </button>
            <ul className="list-group">
                {
                    newCountries.map((country, index) =>
                        <li className="list-group-item"
                            key={index}>
                            {country.name}
                            - (pop. {country.population})
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default AddCountriesFn;
