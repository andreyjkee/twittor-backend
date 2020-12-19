import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchBitcoinPriceRequest,
  fetchBitcoinPriceSuccess,
  fetchBitcoinPriceFailure,

  fetchTestRequest,
  fetchTestSuccess,
  fetchTestFailure,

  fetchSumRequest,
  fetchSumSuccess,
  fetchSumFailure,
} from './actions';
import linksReducer from '../containers/Links/redux/reducer';

const bitcoinDefaultState = {
  price: '0',
  error: null,
  isFetching: false,
};

const bitcoinReducer = handleActions(
  {
    [fetchBitcoinPriceRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchBitcoinPriceSuccess](state, { payload }) {
      return {
        ...state,
        price: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchBitcoinPriceFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  bitcoinDefaultState,
);

const testDefaultState = {
  text: '',
  error: null,
  isFetching: false,
};

const testReducer = handleActions(
  {
    [fetchTestRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchTestSuccess](state, { payload }) {
      return {
        ...state,
        text: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchTestFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  testDefaultState,
);

const sumDefaultState = {
  value: 0,
  error: null,
  isFetching: false,
};

const sumReducer = handleActions(
  {
    [fetchSumRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchSumSuccess](state, { payload }) {
      return {
        ...state,
        value: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchSumFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  sumDefaultState,
);

export default combineReducers({
  bitcoin: bitcoinReducer,
  links: linksReducer,
  test: testReducer,
  sum: sumReducer,
});
