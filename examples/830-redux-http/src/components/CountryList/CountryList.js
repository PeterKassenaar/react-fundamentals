// ./components/CountryList.js

// A simple Container component, displaying a list of countries.
// This component does *not* have to be connected to the store, since
// it receives its data from a parent component (which *is* connected to the store)


import React from "react";
import styles from "../SearchCountries/SearchCountries.module.css";
import LoadingIndicator from "../Loader/LoadingIndicator";

const CountryList = (props) => {
    // destructuring the props
    const {loading, error, countries} = props;
    return (
        <div>
            {
                loading && <LoadingIndicator />
            }
            {
                error && <h3>Error! {props.error.message}</h3>
            }
            <ul className="list-group">
                {
                    countries.map((country, index) => (
                        <li className="list-group-item" key={index}>
                            <img src={country.flag} alt="flag" className={styles.imgFlag}/>
                            {country.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default CountryList
