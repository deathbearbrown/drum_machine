import {createStore, applyMiddleware} from 'redux';
import {timerMiddleware} from '../middleware/timer';
import defaultState from './defaultState';
import rootReducer from '../reducers';

const middleware = applyMiddleware(timerMiddleware);

export default createStore(rootReducer, defaultState, middleware);
