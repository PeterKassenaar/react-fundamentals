import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from './MainNavigation.module.css'

class MainNavigation extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<NavLink exact activeClassName={styles.activeRoute} to="/">Home</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName={styles.activeRoute} to="/cats">Cats</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName={styles.activeRoute} to="/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName={styles.activeRoute} to="/about">About</NavLink>
					</li>
				</ul>
			</nav>
		)
			;
	}
}

export default MainNavigation;
