// ../reducers/index.js

// combining various reducers into one reducer, and
// feeding this to the store in ../store/index.js
import {combineReducers} from 'redux';
import counterReducer from "./counter-reducer";
import messageReducer from "./message-reducer";

export default combineReducers({counterReducer, messageReducer})
