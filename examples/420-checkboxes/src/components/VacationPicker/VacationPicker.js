// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using class based components here.
import React, {Component} from 'react';

class VacationPicker extends Component {

	// Local state for VacationPicker, holding an array with visited countries.
	// In Real life apps you would lift this state up to the parent component.
	state = {
		visitedCountries: []
	};

	checkCountry(country) {
		// The country can be only once  in the array of visited countries.
		// if it is already there, it means the box is unchecked and
		// the item should be removed from the array
		if (this.state.visitedCountries.indexOf(country) > -1) {
			const newVisitedCountries = this.state.visitedCountries.filter(i => i !== country)
			this.setState({
				visitedCountries: newVisitedCountries
			})
		} else {
			// it's not there yet, so add it.
			this.setState({
				visitedCountries: [...this.state.visitedCountries, country]
			});
		}
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					{this.props.countries.map(country =>
						<li className="list-group-item"
							key={country.id}
							id={country.id}
							title={country.details}>
							{/*Checkbox, indicating if you visited a country*/}
							{/*This is an *uncontrolled component* as it doesn't have */}
							{/*an onChange handler and a value/checked property*/}
							<input type="checkbox"
								   onClick={() => this.checkCountry(country)}
							/>&nbsp;
							{country.name}
						</li>
					)}
				</ul>
				<h2>I visited:</h2>
				<ul className="list-group">
					{
						this.state.visitedCountries.map(country =>
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
}

export default VacationPicker
