import { handleActions } from 'redux-actions';

import {
  fetchLinksRequest,
  fetchLinksSuccess,
  fetchLinksFailure,
} from './actions';

const defaultState = {
  values: {
    link1: '',
    link2: '',
  },
  error: null,
  isFetching: false,
};

export default handleActions(
  {
    [fetchLinksRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchLinksSuccess](state, { payload }) {
      return {
        ...state,
        values: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchLinksFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
