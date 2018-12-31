import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as authReducer } from './modules/auth';
import logger from 'redux-logger';

export const createReducer = () => {
  return combineReducers({
    auth: authReducer
  });
};

export default (preloadStates = {}, otherEnchanters = {}) => {
  let middlewares = [];
  middlewares.push(logger);

  return createStore(
    createReducer(),
    preloadStates,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
