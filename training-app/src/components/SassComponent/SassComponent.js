import React, {Component} from 'react';
import './SassComponent.scss'

class SassComponent extends Component {
	render() {
		return (
			<div>
				<p>4. Using Sass in a React project</p>
				<h1>A Sass example file</h1>
				{/*1. Header/variables example*/}
				<h2>Variables example</h2>
				<div className="header header1">color : $header1</div>
				<div className="header header2">color : $header2</div>
				<div className="header header3">color : $header3</div>

				 {/*2. Nesting example*/}
				<h2>Nesting example</h2>
				<nav>
					<ul>
						<li><a href="#">Home </a></li>
						<li><a href="#">Products</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</nav>
				<p>(The links above don't actually work. Look at the (s)css file to see the code and the generated
					output.)</p>
			</div>
		);
	}
}

export default SassComponent;
