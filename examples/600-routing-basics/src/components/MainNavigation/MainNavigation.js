import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import  styles from './MainNavigation.module.css'

class MainNavigation extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>

				{/*/!*Another approach: using NavLink, we can use the active-link-class style*!/*/}
				{/*<ul>*/}
				{/*	<li>*/}
				{/*		<NavLink exact activeClassName="activeRoute" to="/">Home</NavLink>*/}
				{/*	</li>*/}
				{/*	<li>*/}
				{/*		<NavLink exact activeClassName="activeRoute" to="/about">About</NavLink>*/}
				{/*	</li>*/}
				{/*	<li>*/}
				{/*		<NavLink exact activeClassName="activeRoute" to="/contact">Contact</NavLink>*/}
				{/*	</li>*/}
				{/*</ul>*/}
				{/*(with activeClassName properties)*/}
				{/*End navigation*/}
			</nav>
		)
			;
	}
}

export default MainNavigation;
