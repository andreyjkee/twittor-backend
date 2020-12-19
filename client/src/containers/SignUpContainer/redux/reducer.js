import { handleActions } from 'redux-actions';
import {
  fetchSignUpRequest,
  fetchSignUpSuccess,
  fetchSignUpFailure,
} from './actions';

const defaultState = {
  error: null,
  isFetching: false,
};

export default handleActions(
  {
    [fetchSignUpRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchSignUpSuccess](state) {
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    },
    [fetchSignUpFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
