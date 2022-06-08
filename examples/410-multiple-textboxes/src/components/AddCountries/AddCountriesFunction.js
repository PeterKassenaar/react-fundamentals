// AddCountriesFunction
// The same component as before, but this time as a Function based component
import React, {useState} from "react";

const AddCountriesFunction = () => {
    // 0. We need state for this component
    const emptyCountry = {name: '', population: ''}
    const [newCountry, setNewCountry] = useState(emptyCountry)
    const [newCountries, setNewCountries] = useState([])

    // 1. updateCountry - updates the value of newCountry in the state
    // on every 'change' event (i.e. every keystroke).
    const updateCountry = (event) => {
        // Create constants, find out which control the
        // value comes from, by retrieving the 'name' attribute.
        // Then set the correct state property
        const name = event.target.name;
        const value = event.target.value;
        setNewCountry({
            ...newCountry, // spread in the existing, current country
            [name]: value // update the given property
        })
    }

    // 2. addCountry - add a new country to the array of countries.
    // It uses the current value (i.e. the state) of the textbox.
    const addCountry = () => {
        // Set the state - and reset the individual fields w/ an empty country
        setNewCountries([...newCountries, newCountry])
        setNewCountry(emptyCountry)
    }

    return (
        <div>
            <h2>New Countries - via Function component</h2>
            {/*This input is a Controlled Component, because it's */}
            {/*value is driven from the state. Controlled components */}
            {/*do _need_ an onChange handler. Otherwise the components value*/}
            {/*would be read-only (unless of course you want to create a read-only component ;-)*/}
            {/*We need a textbox*/}
            <input type="text"
                   name="name"
                   placeholder="New country..."
                   className="form-control-lg"
                   value={newCountry.name}
                   onChange={(event => updateCountry(event))}
            />
            <input type="text"
                   name="population"
                   placeholder="Population..."
                   className="form-control-lg"
                   value={newCountry.population}
                   onChange={(event => updateCountry(event))}
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

export default AddCountriesFunction;
