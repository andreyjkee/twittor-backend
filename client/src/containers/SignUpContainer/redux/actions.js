import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchSignUpRequest = createAction('FETCH_SIGN_UP_REQUEST');
export const fetchSignUpSuccess = createAction('FETCH_SIGN_UP_SUCCESS');
export const fetchSignUpFailure = createAction('FETCH_SIGN_UP_FAILURE');

export const fetchSignUp = credentials => async (dispatch) => {
  try {
    dispatch(fetchSignUpRequest());

    await api.auth.signUp(credentials);

    dispatch(fetchSignUpSuccess());
  } catch (error) {
    dispatch(fetchSignUpFailure(error));
  }
};
