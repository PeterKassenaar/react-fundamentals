// ../movie-reducer.js
import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    RESET_MOVIES
} from "../constants/action-types";
import initialState from "./initialState";

const movieReducer = (state = initialState, action) => {
    // using a switch here, instead of if-statements. That's just a choice.
    // There is no performance penalty or otherwise. Just a matter of preference
    switch (action.type) {
        case FETCH_MOVIES_BEGIN:
            // mark the state as 'loading', so we can show a spinner or something.
            // Also reset errors (if any).
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_MOVIES_SUCCESS:
            // All done, success. Dispatch items to the store
            return {
                ...state,
                loading: false,
                movies: action.payload.movies
            }
        case FETCH_MOVIES_ERROR:
            // All done, but server returned an error. Reset the array
            // of movies, return the error
            return {
                ...state,
                loading: false,
                movies: [],
                error: action.payload.error
            }
        case RESET_MOVIES:
            // Reset the state
            return {
                movies: [],
                loading: false,
                error:null
            }
        default:
            return state;
    }
}
export default movieReducer
