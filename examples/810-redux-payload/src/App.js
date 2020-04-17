import React from 'react';
import MyCounter from "./components/MyCounter";
import Buttons from "./components/Buttons";

function App() {
	return (
		<div className="container">
			<h1>A simple redux store</h1>
			<MyCounter/>
			<Buttons/>
		</div>
	);
}

export default App;
