// VacationPicker.js - a simple React Vacation Picker component.
import React from 'react';

const VacationPicker = ({countries}) => {

    // Local state for VacationPicker, holding an array with visited countries.
    // In Real life apps you would lift this state up to the parent component.
    const [visitedCountries, setVisitedCoutries] = React.useState([]);

    const checkCountry = country => {
        // The country now comes from a radio button, so only one
        // at a time can be selected. Easy peasy.
        setVisitedCoutries([country])
    }

    // Render UI
    return (
        <div>
            <ul className="list-group">
                {countries.map(country =>
                    <li
                        className="list-group-item"
                        key={country.id}
                        id={country.id}
                        title={country.details}>
                        {/*Radio button, indicating if this country is your favorite */}
                        {/*The 'name' property of all radio buttons is equal, meaning*/}
                        {/*they belong to the same group*/}
                        <label>
                            <input type="radio"
                                   name="countries"
                                   onClick={() => checkCountry(country)}
                            />&nbsp;
                            {country.name}
                        </label>
                    </li>
                )}
            </ul>
            {/*Selected favorite country */}
            <h2>My favorite:</h2>
            <ul className="list-group">
                {
                    // workshop: this can be done quicker/simpler, by
                    // NOT using an array. How?
                    visitedCountries.map(country =>
                        <li className="list-group-item"
                            key={country.id}
                        >
                            {country.name}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default VacationPicker
