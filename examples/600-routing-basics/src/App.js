import logo from './img/logo-react-small.png';
import MainNavigation from "./components/MainNavigation/MainNavigation";

// import routing stuff
import {Routes, Route, Navigate} from "react-router-dom";

// components to be shown inside the router
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";

const App = () => {
    return (
        <div className="container">
            <h1>
                <img src={logo} alt="React logo" width={80}/>
                React routing app</h1>
            <hr/>
            <MainNavigation/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                {/*Navigate to home if no matching route is found*/}
                <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                />
            </Routes>
            <hr/>

        </div>
    );
}

export default App;
