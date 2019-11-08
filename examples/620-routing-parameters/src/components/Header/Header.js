import logo from "../../img/logo-react-small.png";
import React, {Component} from "react";

class Header extends Component {
    render() {
        return <header className="App-header">
            <h1>
                <img src={logo} alt="react logo" width={80}/>
                React routing app
            </h1>
        </header>;
    }
}
export default Header
