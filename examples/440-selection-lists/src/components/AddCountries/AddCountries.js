// AddCountries - a component that shows controlled/uncontrolled
// form components.
// It uses local state for clarity in this demo
// (i.e. all state and methods are handled inside
// this component). In a real life app you would pass/lift state up to a
// parent component.
import React, { useState } from 'react';

const AddCountries = () => {
	// 0. We need state for this component, we are using useState Hook for it
	const [name, setName] = useState('');
	const [population, setPopulation] = useState('');
	const [newCountries, setNewCountries] = useState([]);

	// 1. updateCountry - updates the value of newCountry in the state
	// on every 'change' event (i.e. every keystroke).
	const updateCountry = (event) => {
		// Create constants, find out which control the
		// value comes from, by retrieving the 'name' attribute.
		// Then set the correct state property
		const target = event.target;
		const value = target.value;
		const name = target.name;

		if (name === 'name') {
			setName(value);
		} else if (name === 'population') {
			setPopulation(value);
		}
	}

	// 2. addCountry - add a new country to the array of countries.
	// It uses the current value (i.e. the state) of the textbox.
	const addCountry = () => {
		// 1. create a new country, based on the state
		const newCountry ={
			name: name,
			population: population,
		};

		// 2. set the state - and reset the individual fields
		setName('');
		setPopulation('');
		setNewCountries(prevCountries => [...prevCountries, newCountry]);
	}

	return (
		<div>
			<h2>New Countries</h2>
			{/*This input is a Controlled Component, because it's */}
			{/*value is driven from the state. Controlled components */}
			{/*do _need_ an onChange handler. Otherwise the components value*/}
			{/*would be read-only (unless of course you want to create a read-only component ;-)*/}
			{/*We need a textbox*/}
			<input type="text"
				   name="name"
				   placeholder="New country..."
				   className="form-control-lg"
				   value={name}
				   onChange={updateCountry}
			/>
			<input type="text"
				   name="population"
				   placeholder="Population..."
				   className="form-control-lg"
				   value={population}
				   onChange={updateCountry}
			/>
			<button className="btn btn-success"
					onClick={addCountry}>
				Add Country
			</button>
			<ul className="list-group">
				{
					newCountries.map((country, index) =>
						<li className="list-group-item"
							key={index}>
							{country.name}
							- (pop. {country.population})
						</li>
					)
				}
			</ul>
		</div>
	);
}
export default AddCountries;
