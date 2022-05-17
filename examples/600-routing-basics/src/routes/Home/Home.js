import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <p>
                    "In react, everything is component based, Which made React Router V6 a significant upgrade from the
                    previous versions. A routes.js configuration file which is no longer needed was used to centrally
                    manage the routing of a react application. Now everything with respect to react and routing is done
                    using components."
                </p>
                <p>See also <a href="https://reactrouter.com/" rel="noreferrer" target="_blank">
                    https://reactrouter.com/
                </a></p>
            </div>
        )
    }
}

export default Home
