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
                        >
                            {country.name}
                            <button
                                className="btn btn-danger btn-sm float-right"
                                onClick={() => this.props.remove(country)}>
                                Delete
                            </button>
                            <button
                                className="btn btn-outline-info btn-sm float-right"
                                onClick={() => this.props.update(country)}>
                                Edit
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default VacationPicker
