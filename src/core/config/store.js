import thunk from 'redux-thunk';
import reducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import env from './env/index';
import logger from 'redux-logger';

const middleware = [thunk];

if (env.env === 'development') {
    middleware.push(logger);
}

export default createStore(reducer, applyMiddleware(...middleware));