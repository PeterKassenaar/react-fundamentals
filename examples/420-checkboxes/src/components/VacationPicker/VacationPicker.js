// VacationPicker.js - a simple React Vacation Picker component.
import React from 'react';

const VacationPicker = ({countries}) => {

    // Local state for VacationPicker, holding an array with visited countries.
    // In Real life apps you would lift this state up to the parent component.
    const [visitedCountries, setVisitedCountries] = React.useState([]);

    const checkCountry = (country) => {
        // The country can be only once  in the array of visited countries.
        // if it is already there, it means the box has changed from checked to unchecked and
        // the item should be removed from the array
        if (visitedCountries.indexOf(country) > -1) {
            const newVisitedCountries = visitedCountries.filter(i => i !== country)
            setVisitedCountries(newVisitedCountries);
        } else {
            // it's not there yet, so add it.
            setVisitedCountries([...visitedCountries, country])
        }
    }

    // Render UI
    return (
        <div>
            <ul className="list-group">
                {countries.map(country =>
                    <li className="list-group-item"
                        key={country.id}
                        id={country.id}
                        title={country.details}>
                        {/*Checkbox, indicating if you visited a country. */}
                        {/*This is an *uncontrolled component* as it doesn't have */}
                        {/*an onChange handler and a value/checked property. */}
                        {/*Therefore, we use simply an onClick-handler. */}
                        <input type="checkbox"
                               onClick={() => checkCountry(country)}
                        />&nbsp;
                        {country.name}
                    </li>
                )}
            </ul>
            <h2>I visited:</h2>
            <ul className="list-group">
                {
                    visitedCountries.map(country =>
                        <li className="list-group-item"
                            key={country.id}>
                            {country.name}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default VacationPicker
