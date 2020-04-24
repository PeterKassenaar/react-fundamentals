import React from 'react';
import SearchCountries from "./components/SearchCountries/SearchCountries";

function App() {
	return (
		<div className="container">
			<h1>A redux store, fetching data over <code>http</code></h1>
			<SearchCountries />
		</div>
	);
}

export default App;
