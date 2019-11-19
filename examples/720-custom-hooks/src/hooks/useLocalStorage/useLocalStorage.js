import {useState, useEffect} from 'react'

function useLocalStorage(key, defaultValue) {
    // using local state here. Note the usage of a *function* as the
    // initial parameter for useState(). This is for trying if the
    // value already exists in localStorage
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key)) || Number(defaultValue)
        } catch (e) {
            value = defaultValue;
        }
        // fallback to 0 if an invalid value is passed in (i.e. NaN)
        return isNaN(+value) ? 0 : value;
    });

    // Update the item on every change of state.
    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state]);

    // Return an array with the state and setState function
    return [state, setState]
}
export default useLocalStorage
