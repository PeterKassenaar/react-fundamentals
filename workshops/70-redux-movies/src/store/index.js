
// src/js/store/index.js

// Create the store
import {applyMiddleware, createStore} from "redux"; // also import applyMiddleware now
import rootReducer from "./reducers/index";
import thunk from "redux-thunk"; // middleware for our store

// now apply redux-thunk as middleware
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
