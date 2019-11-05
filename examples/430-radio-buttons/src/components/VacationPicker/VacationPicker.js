// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using class based components here.
import React, {Component} from 'react';

class VacationPicker extends Component {

	// Local state for VacationPicker, holding an array with visited countries.
	// In Real life apps you would lift this state up to the parent component.
	state = {
		visitedCountries: [],
	};

	checkCountry(country) {
		// The country now comes from a radio button, so only one
		// at a time can be selected. Easy peasy.
		this.setState({
			visitedCountries: [country]
		});
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					{this.props.countries.map(country =>
						<li
							className="list-group-item"
							key={country.id}
							id={country.id}
							title={country.details}>
							{/*Radio button, indicating if this country is your favorite */}
							{/*The 'name' property of all radio buttons is equal, meaning*/}
							{/*they belong to the same group*/}
							<label>
								<input type="radio"
									   name="countries"
									   onClick={() => this.checkCountry(country)}
								/>&nbsp;
								{country.name}
							</label>
						</li>
					)}
				</ul>
				{/*Selected favorite country */}
				<h2>My favorite:</h2>
				<ul className="list-group">
					{
						// workshop: this can be done quicker/simpler, by
						// NOT using an array. How?
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
