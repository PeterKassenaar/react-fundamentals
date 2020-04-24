// ../country-reducer.js
import {
    FETCH_COUNTRIES_BEGIN,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_ERROR,
    RESET_COUNTRIES
} from "../constants/action-types";
import initialState from "./initialState";

const countryReducer = (state = initialState, action) => {
    // using a switch here, instead of if-statements. That's just a choice.
    // There is no performance penalty or otherwise. Just a matter of preference
    switch (action.type) {
        case FETCH_COUNTRIES_BEGIN:
            // mark the state as 'loading', so we can show a spinner or something.
            // Also reset errors (if any).
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_COUNTRIES_SUCCESS:
            // All done, success. Dispatch items to the store
            return {
                ...state,
                loading: false,
                countries: action.payload.countries
            }
        case FETCH_COUNTRIES_ERROR:
            // All done, but server returned an error. Reset the array
            // of countries, return the error
            return {
                ...state,
                loading: false,
                countries: [],
                error: action.payload.error
            }
        case RESET_COUNTRIES:
            // Reset the state
            return {
                countries: [],
                loading: false,
                error:null
            }
        default:
            return state;
    }
}
export default countryReducer
