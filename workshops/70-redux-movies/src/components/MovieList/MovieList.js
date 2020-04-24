// ./components/MovieList.js

// A simple Container component, displaying a list of movies.
// This component does *not* have to be connected to the store, since
// it receives its data from a parent component (which *is* connected to the store)

import React from "react";
import styles from "./SearchMovies.module.css";
import LoadingIndicator from "../Loader/LoadingIndicator";

const MovieList = (props) => {
    // destructuring the props
    const {loading, error, movies} = props;
    return (
        <div>
            {
                loading && <LoadingIndicator/>
            }
            {
                error && <h3>Error! {props.error.message}</h3>
            }
            <ul className="list-group">
                {
                    movies.map((movie, index) => (
                        <li className="list-group-item" key={index}>
                            <img src={movie.Poster} alt="movie poster" className={styles.imgMoviePoster}/>
                            {movie.Title} - {movie.Year}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default MovieList
