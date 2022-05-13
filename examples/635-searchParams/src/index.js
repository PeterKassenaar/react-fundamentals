import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// bootstrap stuff & custom styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

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
