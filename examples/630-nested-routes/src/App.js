import logo from './img/logo-react-small.png';
import MainNavigation from "./components/MainNavigation/MainNavigation";

// import routing stuff
import {Routes, Route} from "react-router-dom";

// components to be shown inside the router
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import FileNotFound from "./routes/FileNotFound/FileNotFound";
import CountryDetail from "./routes/CountryDetail/CountryDetail";

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
                        <Route path='/' element={<Home/>}>
                            <Route path=':id/:name' element={<CountryDetail/>}/>
                        </Route>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='*' element={<FileNotFound/>}/>
                    </Routes>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default App;
