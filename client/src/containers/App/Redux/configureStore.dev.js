import prodStore from './configureStore.prod';
import DevTools from '../components/DevTools';

export default (combinedReducer, middlewares) => prodStore(
  combinedReducer,
  [...middlewares, DevTools.instrument()],
);
