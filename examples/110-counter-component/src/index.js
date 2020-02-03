import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from "./components/HelloReact";

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// We now render HelloReact as Top Level Component. The component
// App.js is actually not used in this example project. It may be removed. No one bothers :-).
ReactDOM.render(
	<HelloReact/>,
	document.getElementById('root')
);
