import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import  styles from './MainNavigation.module.css';

class MainNavigation extends Component {
	render() {
		return (
			<nav>
				{/*Start navigation*/}
				<ul>
					<li>
						<NavLink to="/"
							  className={({ isActive }) =>
								  (isActive ? styles.activeRoute : styles.inactiveRoute)}
						>Home</NavLink>
					</li>
					<li>
						<NavLink to="/about"
							  className={({ isActive }) =>
								  (isActive ? styles.activeRoute : styles.inactiveRoute)}
						>About</NavLink>
					</li>
					<li>
						<NavLink to="/contact"
							  className={({ isActive }) =>
								  (isActive ? styles.activeRoute : styles.inactiveRoute)}
						>Contact</NavLink>
					</li>
				</ul>
				{/*End navigation*/}
			</nav>
		)
	}
}

export default MainNavigation;
