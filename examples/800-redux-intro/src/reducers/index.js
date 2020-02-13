// ../reducers/index.js

// Step 2. Create initialState and a rootReducer.
// You could also call it 'counterReducer' or the like.
import {DECREMENT, INCREMENT, RESET} from "../constants/action-types";

const initialState = {
	counter: 0
};

function rootReducer(state = initialState, action) {
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
};

export default rootReducer;
