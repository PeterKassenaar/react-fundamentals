import React from 'react';
import SearchMovies from "./components/SearchMovies/SearchMovies";

function App() {
	return (
		<div className="container">
			<h1>Talking to <code>https://omdbapi.com</code>, placing results in the store</h1>
			<SearchMovies />
		</div>
	);
}

export default App;
