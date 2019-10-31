// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using class based components here.
import React, {Component} from 'react';

class VacationPicker extends Component {

    // 1. Mounting lifecycle hook
    componentDidMount() {
        console.log('VacationPicker :: componentDidMount() called...');
    }
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
                        </li>
                    )}
                </ul>
                <button className="btn btn-info"
                    onClick={()=> this.props.toggle()}>Toggle Countries</button>
            </div>
        );
    }
}

export default VacationPicker
