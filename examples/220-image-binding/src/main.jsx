import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App.jsx";

// Import Bootstrap stuff just to make it look nice.
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
