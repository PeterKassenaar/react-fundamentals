// ../message-reducer.js
import {RESET_MESSAGE, SET_MESSAGE} from "../constants/action-types";

const initialState = {
    message: ''
};

const messageReducer = (state = initialState, action) => {
    if (action.type === SET_MESSAGE) {
        return {
            msg: action.payload
        }
    }
    if (action.type === RESET_MESSAGE) {
        return {
            msg: ''
        }
    }
    return state;
}
export default messageReducer
