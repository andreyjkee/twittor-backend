import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchSignInRequest = createAction('FETCH_SIGN_IN_REQUEST');
export const fetchSignInSuccess = createAction('FETCH_SIGN_IN_SUCCESS');
export const fetchSignInFailure = createAction('FETCH_SIGN_IN_FAILURE');

export const fetchSignIn = credentials => async (dispatch) => {
  try {
    dispatch(fetchSignInRequest());

    const response = await api.auth.signIn(credentials);
    const { token } = response.data;

    localStorage.setItem('token', token);

    dispatch(fetchSignInSuccess());
  } catch (error) {
    dispatch(fetchSignInFailure(error));
  }
};
