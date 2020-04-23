// .../actions/message-actions.js
import {
    FETCH_COUNTRIES_BEGIN,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_ERROR,
    RESET_COUNTRIES
} from "../constants/action-types";
import axios from "axios";

// action creators
export const searchCountriesBegin = name => {
    return {
        type: FETCH_COUNTRIES_BEGIN,
        payload: name ? name : ''
    }
};

export const searchCountriesSuccess = countries => {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: {countries}
    }
};

export const searchCountriesError = error => {
    return {
        type: FETCH_COUNTRIES_ERROR,
        payload: {error}
    }
};

export const resetCountries = () => {
    return {
        type: RESET_COUNTRIES
    }
};

// Actions, called from the component.
// It is utilizing the action creators created above.
export const searchCountries = name => {
    // This is actually the 'thunk'. This function *returns a function* that
    // receives dispatch as the parameter. Without it, dispatch should be a parameter for
    // the searchCountries function. Which is absolutely possible, but then the component, the store
    // and this function are much more tightly coupled together. By using a thunk, we disconnect
    // the dispatcher from the component. E.g, the component doesn't have to know *how* searchCountries
    // gets the countries.
    return dispatch => {
        // show loading spinner
        dispatch(searchCountriesBegin(name));
        // simulate some network delay
        setTimeout(() => {
            return axios.get('https://restcountries.eu/rest/v2/name/' + name)
                // .then(handleErrors)
                .then(res => res.data)
                .then(countries => {
                    console.log({countries}); // logging
                    dispatch(searchCountriesSuccess(countries));
                    return countries;
                })
                .catch(error => dispatch(searchCountriesError(error)))
        }, 1000)
    }
}
