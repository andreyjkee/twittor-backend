import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');

export const fetchCurrentUser = () => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserRequest());

    if (localStorage.getItem('token')) {
      setTimeout(async () => {
        const response = await api.user.getCurrent();

        const user = response.data;

        dispatch(fetchCurrentUserSuccess(user));
      }, 3000);
    } else {
      setTimeout(() => {
        dispatch(fetchCurrentUserSuccess(null));
      }, 3000);
    }
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error));
  }
};
