
// src/js/store/index.js

// Create the store
import { createStore } from "redux";
import rootReducer from "./reducers/index"; // A combination of reducers

const store = createStore(rootReducer);

export default store;
