import React from 'react';
import MyCounter from "./components/MyCounter";
import Buttons from "./components/Buttons";
import MyTextbox from "./components/MyTextbox";

function App() {
	return (
		<div className="container">
			<h1>A simple redux store</h1>
			<MyCounter/>
			<Buttons/>
			<hr/>
			<MyTextbox />
		</div>
	);
}

export default App;
