// AddCountries - a component that shows controlled/uncontrolled
// form components.
// It uses local state for clarity in this demo
// (i.e. all state and methods are handled inside
// this component). In a real life app you would pass/lift state up to a
// parent component.
import React, {Component} from 'react';

class AddCountries extends Component {
	// 0. We need state for this component
	state = {
		newCountry: '',
		newCountries: []
	};

	// 1. updateCountry - updates the value of newCountry in the state
	// on every 'change' event (i.e. every keystroke)
	updateCountry(event) {
		this.setState({
			newCountry: event.target.value
		})
	}

	// 2. addCountry - add a new country to the array of countries.
	// It uses the current value (i.e. the state) of the textbox.
	addCountry() {
		this.setState({
			newCountries: [...this.state.newCountries, this.state.newCountry]
		})
	}

	render() {
		return (
			<div>
				<h2>New Countries</h2>
				{/*This input is a Controlled Component, because it's */}
				{/*value is driven from the state. Controlled components */}
				{/*do _need_ an onChange handler. Otherwise the components value*/}
				{/*would be read-only (unless of course you want to create a read-only component ;-)*/}
				{/*We need a textbox*/}
				<input type="text"
					   placeholder="New country..."
					   className="form-control-lg"
					   value={this.state.newCountry}
					   onChange={(event => this.updateCountry(event))}
					   // handling the Enter key:
					   // onKeyPress={(e) => {
						//    if (e.key === 'Enter') {
						// 	   this.addCountry()
						//    }
					   // }}
				/>
				<button className="btn btn-success"
						onClick={() => this.addCountry()}>
					Add Country
				</button>
				<ul className="list-group">
					{
						this.state.newCountries.map((country, index) =>
							<li className="list-group-item"
								key={index}
							>
								{country}
							</li>
						)
					}
				</ul>
			</div>
		);
	}
}

export default AddCountries;
