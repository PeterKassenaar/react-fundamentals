// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using class based components here.
import React, {Component} from 'react';
import styles from './VacationPicker.module.css'

class VacationPicker extends Component {

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.countries.map(country =>
                        <li
                            className="list-group-item"
                            key={country.name}
                            onClick={() => this.props.select(country.name)}
                        >
                            <img src={country.flag} alt="flag" className={styles.imgFlag}/>
                            {country.name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default VacationPicker
