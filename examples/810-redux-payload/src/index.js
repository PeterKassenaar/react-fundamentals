import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// 6. import the store stuff
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
