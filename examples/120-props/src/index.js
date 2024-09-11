import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// Using <App /> as the Top Level Component. It has two Child components. Check this.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
