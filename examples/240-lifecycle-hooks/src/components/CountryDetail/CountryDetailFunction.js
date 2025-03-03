import React, { useState, useEffect } from 'react';

// We rewrote the Country Detail Component to a Function Based component.
// The class bases lifecycle methods are now replaced with React Hooks like
// useState() and useEffect(). As you can see, we can use multiple useState()'s and
// multiple useEffect()'s to achieve the same results.
const CountryDetailFunction = (props) => {
    const [currentCountry, setCurrentCountry] = useState({});
    const [prevCountry, setPrevCountry] = useState({});

    // 1. Mounting: Equivalent to componentDidMount
    useEffect(() => {
        console.log('CountryDetail :: componentDidMount() called...');
        setCurrentCountry(props.country);
    }, []); // Empty dependency array ensures this runs only on mount

    // 2. Updating: Equivalent to componentDidUpdate
    useEffect(() => {
        console.log('CountryDetail updated!');

        if (props.country.name !== currentCountry.name) {
            setPrevCountry(currentCountry);
            setCurrentCountry(props.country);
        }
    }, [props.country, currentCountry]); // Dependency array ensures this runs when props.country or currentCountry changes

    // 3. Unmounting: Equivalent to componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('CountryDetail :: Component unmounted...');
            // flush caches, close db-connections, update localStorage, etc.
        };
    }, []); // Empty dependency array ensures cleanup only runs on unmount

    return (
        <div>
            <h2>{props.country.name} (Function Based Component)</h2>
            <ul className="list-group">
                <li className="list-group-item">id: {props.country.id}</li>
                <li className="list-group-item">name: {props.country.name}</li>
                <li className="list-group-item">capital: {props.country.capital}</li>
                <li className="list-group-item">details: {props.country.details}</li>
                <li className="list-group-item">
                    <img
                        className="img-fluid"
                        src={require(`../../img/countries/${props.country.img}`)}
                        alt={props.country.name}
                    />
                </li>
                {/* Add the badge conditionally */}
                {props.country.cost > 4000 && (
                    <li className="list-group-item">
                        <span className="badge badge-warning">Expensive!</span>
                    </li>
                )}
            </ul>
            {/* Result of the lifecycle hooks */}
            <h3>Current country: {currentCountry.name}</h3>
            <h3>Previous country: {prevCountry.name}</h3>
        </div>
    );
};

export default CountryDetailFunction;
