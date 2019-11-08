import React, {Component} from 'react';

class Home extends Component {

	render() {
		return (
			<div>
				<h1>Home Component</h1>
				<p>
					"In react, everything is component based, Which made React Router V4 a significant upgrade from the
					previous versions. A routes.js configuration file which is no longer needed was used to centrally
					manage the routing of a react application. Now everything with respect to react and routing is done
					using components."

				</p>
				<p>
					useful ("A modular approach to routing"): <a
					href="https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae">
					https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae
				</a>
				</p>
				<hr/>
			</div>
		)
	}
}

export default Home
