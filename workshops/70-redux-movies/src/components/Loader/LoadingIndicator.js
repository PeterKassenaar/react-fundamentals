import React, {Component} from 'react';

class LoadingIndicator extends Component {
    render() {
        return (
            <div>
                <img src={require('./spinner.gif')} alt="Please wait..."/>
            </div>
        );
    }
}

export default LoadingIndicator;
