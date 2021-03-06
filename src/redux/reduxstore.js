import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import {resultReducer} from "./resultReducer";


let rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    result: resultReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
