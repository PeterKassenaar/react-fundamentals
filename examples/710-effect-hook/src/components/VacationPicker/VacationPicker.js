// VacationPicker.js - a simple React Vacation Picker component.
// Rewritten as a function based component here. It receives its state (props)
// from the parent component.
import React from 'react';

function VacationPicker(props) {
    return (
        <div>
            <ul className="list-group">
                {props.countries.map(country =>
                    <li className="list-group-item"
                        key={country.id}
                        id={country.id}
                        title={country.details}
                        onClick={() => props.select(country)}
                    >
                        {country.name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default VacationPicker
