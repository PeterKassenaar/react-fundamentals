import React  from 'react';

const LoadingIndicator = () => {
    return (
        <div>
            <img src={require('./spinner.gif')} alt="Please wait..."/>
        </div>
    );
}

export default LoadingIndicator;
