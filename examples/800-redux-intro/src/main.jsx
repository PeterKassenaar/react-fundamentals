// main.jsx - the starting file of the application
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App.jsx'

// import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css'

// import store stuff
import store from "./store/index.jsx";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)
