import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import rootReducer from './redusers';

export default () => {
  const store = createStore(rootReducer, applyMiddleware(Logger));
  return store;
}
