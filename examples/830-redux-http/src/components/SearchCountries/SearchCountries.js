import React, {useState} from 'react';
import {connect} from "react-redux";
import {resetCountries, searchCountries} from "../../store/actions/country-actions";
import CountryList from "../CountryList/CountryList";

// In this component; using *both* mapStateToProps and mapDispatchToProps!

const mapStateToProps = state => {
    console.log({state});
    return {
        countries: state.countryReducer.countries,
        loading: state.countryReducer.loading,
        error: state.countryReducer.error
    };
};


// mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        // The increment action now receives a value from the textbox as payload.
        searchCountries: (name) => dispatch(searchCountries(name)),
        resetCountries: () => dispatch(resetCountries())
    };
};

const CountryBox = (props) => {
    const [name, setName] = useState('');
    const {loading, error, countries} = props;

    // handle Enter key from textbox
    const handleKey = event => {
        if (event.key === 'Enter') {
            // Set the message in the store
            props.searchCountries(name);
            setName('')
        }
    }

    return (
        <div>
            <h2>Search for countries: </h2>
            <input type="text"
                   className="form-control-lg"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   onKeyDown={(e) => handleKey(e)}
                   placeholder="Country name..."/>
            <button className="btn btn-success"
                    onClick={() => props.searchCountries(name)}>
                Search
            </button>
            <button className="btn btn-danger"
                    onClick={() => props.resetCountries()}>
                Reset
            </button>
            <CountryList countries={countries} loading={loading} error={error}/>
        </div>
    );
}

// using mapStateToProps and mapDispatchToProps in the same connect() function.
const SearchCountries = connect(mapStateToProps, mapDispatchToProps)(CountryBox)

export default SearchCountries;
