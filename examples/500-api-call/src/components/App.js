// AppFunction.js - the same application, this time as a functional component.
import React, {useState, useEffect} from 'react';
import logo from '../img/logo-react-small.png';
import axios from 'axios';

// Child components
import VacationPicker from './VacationPicker/VacationPicker'
import LoadingIndicator from "./Loader/LoadingIndicator";
import CountryDetail from "./CountryDetail/CountryDetail";

// the API-URLs to get the data from
const url = 'https://restcountries.com/v2/all';
const detail_url = 'https://restcountries.com/v2/name';

// Our parent component - it holds the state for the child components
const App = () => {

    // 0. The state for this component. It is passed down to child components.
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');

    // using the useEffect() hook to fetch the countries
    // from the RestCountries API, available via the global URL.
    useEffect(() => {
        // using setTimeout here, to emulate network delay.
        setTimeout(() => {
            axios.get(url)
                .then(response => {
                    setIsLoaded(true);
                    setCountries(response.data); // JSON
                })
                .catch(error => {
                    console.log('Error!! :: ' + error)
                    setError(error);
                    setIsLoaded(true);
                })
        }, 1000)
    }, []);

    // get details for a specific country via second API call
    const getCountry = name => {
        console.log('Geting country: ', name);
        axios.get(`${detail_url}/${name}`)
            .then(response => {
                console.log(response.data[0]);
                setCountry(response.data[0]);
            })
            .catch(error => {
                console.log('Error!! :: ' + error)
                setError(error);
            })
    }

    // Render UI
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>
                        <img src={logo} alt="react logo" width={80}/>
                        React vacation picker - Function component
                    </h1>
                    {/*Show a loading indicator as long as the countries are not loaded*/}
                    {
                        !isLoaded &&
                        <LoadingIndicator/>
                    }
                    <VacationPicker
                        countries={countries}
                        submit={(country) => getCountry(country)}
                    />
                </div>
                <div className="col-md-6">
                    {/*Pass the picked country down to a detail component*/}
                    {/*Show error if error occured*/}
                    {
                        country && <CountryDetail country={country}/>
                    }
                    {
                        error &&
                        <div className="alert alert-danger">
                            <h2>Error occured</h2>
                            <p>Sorry, an error occured.</p>
                            {/*Ideally: repeat the last error here, for the user to see.*/}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
