import React, {Component} from 'react';
import {Link} from "react-router-dom";
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
				{/*End navigation*/}
			</nav>
		)
	}
}

export default MainNavigation;
