// .../actions/movie-actions.js
import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    RESET_MOVIES
} from "../constants/action-types";
import axios from "axios";

// action creators
export const searchMoviesBegin = name => {
    return {
        type: FETCH_MOVIES_BEGIN,
        payload: name ? name : ''
    }
};

export const searchMoviesSuccess = movies => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: {movies}
    }
};

export const searchMoviesError = error => {
    return {
        type: FETCH_MOVIES_ERROR,
        payload: {error}
    }
};

export const resetMovies = () => {
    return {
        type: RESET_MOVIES
    }
};

// The thunk, called from the component.
// It is utilizing the action creators created above.
export const searchMovies = name => {
    return dispatch => {
        // show loading spinner
        dispatch(searchMoviesBegin(name));
        // simulate some network delay
        setTimeout(() => {
            return axios.get('https://www.omdbapi.com/?apikey=f1f56c8e&s=;' + name)
                // .then(handleErrors)
                .then(res => res.data)
                .then(movies => {
                    console.log({movies}); // logging
                    dispatch(searchMoviesSuccess(movies.Search)); // This API wraps its results in a Search array. Make sure to unwrap it.
                })
                .catch(error => dispatch(searchMoviesError(error)))
        }, 1000)
    }
}
