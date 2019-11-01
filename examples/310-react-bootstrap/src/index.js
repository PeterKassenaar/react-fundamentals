import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// index.js - import global styling. Still required by react-bootstrap
// for some basic styling.
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
