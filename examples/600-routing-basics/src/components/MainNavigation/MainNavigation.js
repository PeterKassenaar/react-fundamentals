import React from 'react';
import {Link} from "react-router-dom";
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <nav>
            {/*Start navigation*/}
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            {/*End navigation*/}
        </nav>
    )
}

export default MainNavigation;
