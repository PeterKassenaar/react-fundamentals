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
		// The country can be only once  in the array of visited countries.
		// if it is already there, it means the box is unchecked and
		// the item should be removed from the array
		// if (this.state.visitedCountries.indexOf(country) > -1) {
		// 	const newVisitedCountries = this.state.visitedCountries.filter(i => i !== country)
		// 	this.setState({
		// 		visitedCountries: newVisitedCountries
		// 	})
		// } else {
		// it's not there yet, so add it.
		this.setState({
			visitedCountries: [country]
		});
		// }
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
							className={'list-group-item ' + (this.state.price > country.cost ? 'active' : '')}
							key={country.id}
							id={country.id}
							title={country.details}>
							{/*Radio button, indicating if this country is your favorite */}
							{/*The name propertie of all radio buttons is equal, meaning*/}
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
				<h2>Mark countries cheaper than...</h2>
				<div className="form-group">
					<select
						value={this.state.price}
						onChange={(e) => this.updatePrice(e)}
						className="form-control"
						name="select"

					>
						{
							this.state.prices.map(price =>
								<option
									key={price}
									value={price}>{price}</option>
							)
						}
					</select>
				</div>
				{/*List of favorites*/}
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
