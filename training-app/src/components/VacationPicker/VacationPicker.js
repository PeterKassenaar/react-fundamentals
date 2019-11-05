// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using class based components here.
import React, {Component} from 'react';

class VacationPicker extends Component {

	// Local state for VacationPicker, holding an array with visited countries.
	// In Real life apps you would lift this state up to the parent component.
	state = {
		visitedCountries: [],
		prices: [1000, 2000, 3000, 4000, 5000],
		price: 1000
	};

	checkCountry(country) {
		// The country now comes from a radio button, so only one
		// at a time can be selected. Easy peasy.
		this.setState({
			visitedCountries: [country]
		});
	}

	updatePrice(event) {
		console.log('selected value:', event.target.value);
		this.setState({
			price: event.target.value
		})
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					{this.props.countries.map(country =>
						<li
							// conditionally add class name:
							// className={'list-group-item ' + (this.state.price > country.cost ? 'active' : '')}
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
				{/*Selection list*/}
				{/*<h2>Mark countries cheaper than...</h2>*/}
				{/*<div className="form-group">*/}
				{/*	<select*/}
				{/*		value={this.state.price}*/}
				{/*		onChange={(e) => this.updatePrice(e)}*/}
				{/*		className="form-control"*/}
				{/*		name="select"*/}

				{/*	>*/}
				{/*		{*/}
				{/*			this.state.prices.map(price =>*/}
				{/*				<option*/}
				{/*					key={price}*/}
				{/*					value={price}>{price}</option>*/}
				{/*			)*/}
				{/*		}*/}
				{/*	</select>*/}
				{/*</div>*/}
				{/*Selected favorite country */}
				<h2>My favorite:</h2>
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
