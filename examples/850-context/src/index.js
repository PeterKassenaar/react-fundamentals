import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Bootstrap stuff as a CSS library
import 'bootstrap/dist/css/bootstrap.min.css';

// Our main component holds the Context.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
