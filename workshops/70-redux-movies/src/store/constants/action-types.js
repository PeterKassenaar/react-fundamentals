//***********************
// Of course the different types of actions can be stored
// in different files and exported from there. Here we work
// with a single file, holding all constants.

// Because we're working with http here (external communication), we
// use BEGIN, SUCCESS, and ERROR constants.
//***********************

// Action Types for fetching movies
export const FETCH_MOVIES_BEGIN = "FETCH MOVIES BEGIN";
export const FETCH_MOVIES_SUCCESS = "FETCH MOVIES SUCCESS";
export const FETCH_MOVIES_ERROR= "FETCH MOVIES ERROR";
export const RESET_MOVIES = "RESET MOVIES";



