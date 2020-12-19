import { createAction } from 'redux-actions';

export const showModalRequest = createAction('OPEN_MODAL');
export const hideModalRequest = createAction('HIDE_MODAL');
export const modalError = createAction('MODAL_ERROR');

export const showModal = (type, modalProps, wrapperProps) => async (dispatch) => {
  try {
    const modal = {
      type,
      show: true,
      modalProps,
      wrapperProps,
      loading: false,
      error: null,
    };
    dispatch(showModalRequest(modal));
  } catch (error) {
    dispatch(modalError(error));
  }
};

export const hideModal = () => async (dispatch) => {
  const modal = {
    show: false,
  };
  dispatch(hideModalRequest(modal));
};
