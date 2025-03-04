
// src/js/store/index.js

// Step 1 - Create the store

// Deprecated - but still working! :
// import { createStore } from "redux";

// More modern - using `configureStore`
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index'; // To be created

// Deprecated: const store = createStore(rootReducer);

// Now recommended: using `configureStore()` (https://react-redux.js.org/introduction/getting-started)
const store = configureStore({
    reducer: rootReducer,
});

export default store;
