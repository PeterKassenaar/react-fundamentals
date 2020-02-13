// .../actions/index.js

import {DECREMENT, INCREMENT, RESET} from "../constants/action-types";

// 4. Creating actions to update the counter

// Creating the increment action. If no payload is provided,
// we update the counter with a default value (e.g. payload) of 1
export const increment = (payload = 1) => {
	return {type: INCREMENT, payload}
};
export const decrement = (payload = 1) => {
	return {type: DECREMENT, payload}
};

// reset action doesn't have a payload. It always resets
// to 0.
export const reset = () => {
	return {type: RESET}
};
