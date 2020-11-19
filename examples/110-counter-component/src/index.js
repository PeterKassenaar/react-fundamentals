import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from "./components/HelloReact";

// import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// We now render HelloReact as Top Level Component.
ReactDOM.render(
	<HelloReact/>,
	document.getElementById('root')
);
