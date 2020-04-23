//***********************
// Of course the different types of actions can be stored
// in different files and exported from there. Here we work
// with a single file, holding all constants.

// Because we're working with http here (external communication), we
// use BEGIN, SUCCESS, and ERROR constants.
//***********************

// Action Types for fetching countries
export const FETCH_COUNTRIES_BEGIN = "FETCH COUNTRIES BEGIN";
export const FETCH_COUNTRIES_SUCCESS = "FETCH COUNTRIES SUCCESS";
export const FETCH_COUNTRIES_ERROR= "FETCH COUNTRIES ERROR";
export const RESET_COUNTRIES = "RESET COUNTRIES";



