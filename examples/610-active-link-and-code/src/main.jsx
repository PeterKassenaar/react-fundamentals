// main.jsx - the starting file of the application
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App.jsx'

// routing stuff
import {BrowserRouter} from "react-router-dom";

// import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
