import React from "react";
import { render } from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./containers3/App";
import store from "./store3";

render(
	<Provider store={store}>
		<App/>	
	</Provider>,
	document.getElementById('app'));