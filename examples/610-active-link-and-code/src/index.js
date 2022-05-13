import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// index.js
// routing stuff
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
