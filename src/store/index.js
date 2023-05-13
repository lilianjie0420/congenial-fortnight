import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducer/index.js';
const logger = store => next => action => next(action);

export default createStore(rootReducer, applyMiddleware(logger));