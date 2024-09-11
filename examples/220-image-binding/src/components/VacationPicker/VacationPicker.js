// VacationPicker.js - a simple React Vacation Picker component.
import React from 'react';

const VacationPicker = ({countries, select}) =>  {

    return (
            <div>
                <ul className="list-group">
                    {countries.map(country =>
                        <li className="list-group-item"
                            key={country.id}
                            id={country.id}
                            title={country.details}
                            onClick={() => select(country)}>
                            {country.name}
                        </li>
                    )}
                </ul>
            </div>
        );
}

export default VacationPicker
