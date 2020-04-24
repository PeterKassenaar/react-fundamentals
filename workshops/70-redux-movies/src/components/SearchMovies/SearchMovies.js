import React, {useState} from 'react';
import {connect} from "react-redux";
import {resetMovies, searchMovies} from "../../store/actions/movie-actions";
import MovieList from "../MovieList/MovieList";

// In this component; using *both* mapStateToProps and mapDispatchToProps!
const mapStateToProps = state => {
    return {
        movies: state.countryReducer.movies,
        loading: state.countryReducer.loading,
        error: state.countryReducer.error
    };
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        // We dispatch the 'thunk' as an action.
        // The thunk in turn dispatches subsequent actions.
        searchMovies: (name) => dispatch(searchMovies(name)),
        resetMovies: () => dispatch(resetMovies())
    };
};

const MovieBox = (props) => {
    const [name, setName] = useState('');
    const {loading, error, movies} = props;

    // handle Enter key from textbox
    const handleKey = event => {
        if (event.key === 'Enter') {
            // Set the message in the store
            props.searchMovies(name);
            setName('')
        }
    }

    return (
        <>
            <h2>Search for movies: </h2>
            <input type="text"
                   className="form-control-lg"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   onKeyDown={(e) => handleKey(e)}
                   placeholder="Movie name..."/>
            <button className="btn btn-success"
                    onClick={() => props.searchMovies(name)}>
                Search
            </button>
            <button className="btn btn-danger"
                    onClick={() => props.resetMovies()}>
                Reset
            </button>
            <MovieList movies={movies} loading={loading} error={error}/>
        </>
    );
}

// using mapStateToProps and mapDispatchToProps in the same connect() function.
const SearchMovies = connect(mapStateToProps, mapDispatchToProps)(MovieBox)

export default SearchMovies;
