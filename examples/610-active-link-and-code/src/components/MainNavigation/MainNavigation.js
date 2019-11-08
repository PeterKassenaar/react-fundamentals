import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from './MainNavigation.module.css'

class MainNavigation extends Component {
	render() {
		return (
			<nav>
				{/*Another approach: using NavLink, we can use the active-link-class style*/}
				<ul>
					<li>
						<NavLink exact activeClassName={styles.activeRoute} to="/">Home</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName={styles.activeRoute} to="/about">About</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName={styles.activeRoute} to="/contact">Contact</NavLink>
					</li>
				</ul>
				{/*(with activeClassName properties)*/}
				{/*End navigation*/}
			</nav>
		)
			;
	}
}

export default MainNavigation;
