// VacationPickerFunction.js - a simple React Vacation Picker component.
// The same as VacationPicker.js, but this time as a functional component.
import React, {Component} from 'react';
import styles from './VacationPicker.module.css'

const VacationPickerFunction = ({countries, submit}) => {
    return (
        <div>
            <ul className="list-group">
                {/*Loop over list of countries, passed in as a prop */}
                {countries.map((country, index) =>
                    <li
                        key={index}
                        className="list-group-item"
                        onClick={() => submit(country.name)}>
                        <img src={country.flag} alt="flag" className={styles.imgFlag}/>
                        {country.name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default VacationPickerFunction
