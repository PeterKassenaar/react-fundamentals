import logo from '../img/logo-react-small.png';

// import routing stuff
import {Routes, Route, Navigate} from "react-router-dom";
import MainNavigation from "./MainNavigation/MainNavigation.jsx";
import {lazy, Suspense} from "react";

// Routed components
import Home from "../routes/Home/Home.jsx";
import About from "../routes/About/About.jsx";
import Contact from "../routes/Contact/Contact.jsx";

// Lazy Loading, use React.lazy() to load routed components lazily
// const Home = lazy(() => import("../routes/Home/Home.jsx"));
// const About = lazy(() => import("../routes/About/About.jsx"));
// const Contact = lazy(() => import("../routes/Contact/Contact.jsx"));

// components to be shown inside the router
const App = () => {
    return (
        <>
            {/* BrowserRouter is already provided in src/main.jsx. */}
            {/* Keeping only one Router in the app prevents nested Router errors. */}
        <div className="container">
            <h1>
                <img src={logo} alt="React logo" width={80}/>
                React routing app</h1>
            <hr/>
            <MainNavigation/>
            {/* Wrap Routes inside Suspense for lazy-loaded components */}
            {/*<Suspense fallback={<div>Loading...</div>}>*/}
            <Routes>
                <Route path='/home' element={ <Home/>}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact/>}/>
                {/*Navigate to home if no matching route is found*/}
                <Route
                    path="*"
                    element={<Navigate to="/home" replace/>}
                />
            </Routes>
            {/*</Suspense>*/}
            <hr/>

        </div>
        </>
    );
}

export default App;
