import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// Using <App /> as the Top Level Component.
// We can now pass arguments to props.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

