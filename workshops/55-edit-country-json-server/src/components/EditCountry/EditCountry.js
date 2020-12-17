// EditCountry - Updating a country and send back to its parent component
import React, {Component} from 'react';

class EditCountry extends Component {
	// 0. We need state for this component to create a new country
	state = {
		name: this.props.country.name,
		capital: this.props.country.capital,
		details: this.props.country.details,
		cost: this.props.country.cost
	};

	// Check if another country is selected
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.country.name !== this.props.country.name) {
			this.setState({
				name: this.props.country.name,
				capital: this.props.country.capital,
				details: this.props.country.details,
				cost: this.props.country.cost
			})
		}
	}

	// 1. updateCountry - updates the value of newCountry in the state
	// on every 'change' event (i.e. every keystroke).
	updateCountry(event) {
		// Create constants, find out which control the
		// value comes from, by retrieving the 'name' attribute.
		// Then set the correct state property
		const target = event.target;
		const value = event.target.value;
		const name = target.name;
		this.setState({
			[name]: value
		})
	}

	// 2. addCountry - create a new country and send it to the parent.
	// It uses the current value (i.e. the state) of the form input.
	submitCountry(event) {
		// 0. prevent sending the form to the server
		event.preventDefault();

		// 1. create a new country, based on the state
		const updatedCountry = {
			id: this.props.country.id,
			name: this.state.name,
			capital: this.state.capital,
			cost: this.state.cost,
			details: this.state.details
		};

		// 2. send the country to the parent
		this.props.submit(updatedCountry)
	}

	// The UI of this component
	render() {
		return (
			<form onSubmit={(e) => this.submitCountry(e)}>
				<h2>Update a Country</h2>
				{/*All controlled components below*/}
				<div className="form-group">
					<input type="text"
						   name="name"
						   placeholder="Country name..."
						   className="form-control"
						   value={this.state.name}
						   onChange={(event => this.updateCountry(event))}
					/>
				</div>
				<div className="form-group">
					<input type="text"
						   name="capital"
						   placeholder="What is the capital?"
						   className="form-control"
						   value={this.state.capital}
						   onChange={(event => this.updateCountry(event))}
					/>
				</div>
				<div className="form-group">
				<textarea
					rows="4"
					name="details"
					placeholder="some details..."
					className="form-control"
					value={this.state.details}
					onChange={(event => this.updateCountry(event))}
				/>
				</div>

				<div className="form-group">
					<input type="number"
						   name="cost"
						   placeholder="Cost for a trip..."
						   className="form-control"
						   value={this.state.cost}
						   onChange={(event => this.updateCountry(event))}
					/>
				</div>
				<p>
					<input type="submit" className="btn btn-success"
						   value="Update Country"/>
					<input type="button" className="btn btn-outline-success"
						   value="Cancel" onClick={() => this.props.cancel()}/>
				</p>
			</form>
		);
	}
}

export default EditCountry;
