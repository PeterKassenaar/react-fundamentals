import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styles from './MainNavigation.module.css'

class MainNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Country</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MainNavigation;
