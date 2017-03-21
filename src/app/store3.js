import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import instaReducer from "./reducers3/instaReducer";

const store = createStore(
	combineReducers({instaReducer}), 
	{}, 
	applyMiddleware(logger(), thunk, promise())
	);

export default store;