// .../actions/message-actions.js
import {RESET_MESSAGE, SET_MESSAGE} from "../constants/action-types";

export const setMessage = value => {
    // check if there is a value provided by the textbox from the component,
    // otherwise return a payload of 1
    return {
        type: SET_MESSAGE,
        payload: value ? value : 'no message provided...'
    }
};

export const resetMessage = () => {
    return {
        type: RESET_MESSAGE
    }
};
