// ../reducers/index.js

// combining various reducers into one reducer, and
// feeding this to the store in ../store/index.js
import {combineReducers} from 'redux';
import countryReducer from './country-reducer'

export default combineReducers({countryReducer})
