// ../counter-reducer.js
// Create initialState and a counterReducer.
import {DECREMENT, INCREMENT, RESET} from "../constants/action-types";

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            counter: state.counter + action.payload
        }
    }
    if (action.type === DECREMENT) {
        return {
            counter: state.counter - action.payload
        }
    }
    if (action.type === RESET) {
        return {
            counter: 0
        }
    }
    return state;
}

export default counterReducer;
