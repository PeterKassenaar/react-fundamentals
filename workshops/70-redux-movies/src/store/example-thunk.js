// pseudo-code example of a 'thunk'.
// See https://en.wikipedia.org/wiki/Thunk for more information on thunks, or
// simply https://github.com/reduxjs/redux-thunk.
// So a thunk is not something you recognize by their name (.thunk() for example), but
// rather a design pattern and architecture that you can use to delay the execution of
// an action. A thunk is a function that returns a (nested) function.

// Please note, this is a *non-working* example, it's purpose is just to
// demonstrate the outline of thunks, so you recognize them if you encounter
// them in a project.
/*
export const getCountries = name => {
    return (dispatch, getState) => {
        return countryApi.getCountries(name)
            .then(countries => {
                dispatch(loadCountriesSuccess(countries))
            })
            .catch(err => {
                dispatch(loadCountriesFail(err))
            })
    }

}
*/
