import logo from '../img/logo-react-small.png';

// import routing stuff
import {Route, Routes} from "react-router-dom";
import MainNavigation from "./MainNavigation/MainNavigation.jsx";

// Routed components
import Home from "../routes/Home/Home.jsx";
import About from "../routes/About/About.jsx";
import Contact from "../routes/Contact/Contact.jsx";
import CountryDetail from "../routes/CountryDetail/CountryDetail.jsx";
import FileNotFound from "../routes/FileNotFound/FileNotFound.jsx";

// components to be shown inside the router
const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>
                        <img src={logo} alt="React logo" width={80}/>
                        React routing app</h1>
                    <hr/>
                    <MainNavigation/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/detail/:id/:name' element={<CountryDetail/>}/>
                        <Route path='*' element={<FileNotFound/>}/>
                    </Routes>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default App;
