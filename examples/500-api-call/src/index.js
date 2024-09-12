import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from "./components/AppClass";
import App from "./components/App";

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// The Top Level Component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
