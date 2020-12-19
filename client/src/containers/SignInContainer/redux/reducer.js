import { handleActions } from 'redux-actions';
import {
  fetchSignInRequest,
  fetchSignInSuccess,
  fetchSignInFailure,
} from './actions';

const defaultState = {
  error: null,
  isFetching: false,
};

export default handleActions(
  {
    [fetchSignInRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchSignInSuccess](state) {
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    },
    [fetchSignInFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
