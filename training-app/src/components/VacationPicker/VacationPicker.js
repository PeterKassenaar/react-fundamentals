// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using class based components here.
import React, {Component} from 'react';

class VacationPicker extends Component {

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.countries.map(country =>
                        <li className="list-group-item"
                            key={country.id}
                            id={country.id}
                            title={country.details}
                            onClick={() => this.props.select(country)}
                        >
                            {country.name}
                            {/*Workshop: add a badge directly in this list if a
                            destination is 'on sale' or 'expensive'. */}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default VacationPicker
