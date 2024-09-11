import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// index.js - import global styling. Still required by react-bootstrap
// for some basic styling.
import 'bootstrap/dist/css/bootstrap.min.css'

// The Top Level Component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
