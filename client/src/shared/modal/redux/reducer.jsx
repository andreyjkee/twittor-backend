import { handleActions } from 'redux-actions';

import {
  showModalRequest,
  hideModalRequest,
  modalError,
} from './actions';

const defaultState = {
  type: '',
  show: false,
  modalProps: null,
  loading: false,
  error: null,
};

export default handleActions(
  {
    [showModalRequest](state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    [hideModalRequest](state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    [modalError](state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  defaultState,
);
