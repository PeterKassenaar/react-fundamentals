// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using class based components here.
import React from 'react';

const VacationPicker = ({countries, select}) => {

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
                        {/*Workshop: add a badge directly in this list if a
                            destination is 'on sale' or 'expensive'. */}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default VacationPicker
