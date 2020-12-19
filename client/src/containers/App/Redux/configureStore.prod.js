import { createStore, compose } from 'redux';

export default (combinedReducer, middlewares) => createStore(
  combinedReducer,
  compose.apply(this, middlewares),
);
