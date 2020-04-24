// src/js/store/index.js

// Create the store
import {applyMiddleware, createStore} from "redux"; // also import applyMiddleware now
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";// middleware for our store
import {composeWithDevTools} from "redux-devtools-extension"; // devtools extension

// now apply redux-thunk as middleware
const store = createStore(
    rootReducer,
    // activate Redux DevTools for this store
    composeWithDevTools(
        applyMiddleware(thunk)
        // other middleware, if any
    )
);

export default store;
