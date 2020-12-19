import { createAction } from 'redux-actions';

export const fetchLinksRequest = createAction('FETCH_LINKS_REQUEST');
export const fetchLinksSuccess = createAction('FETCH_LINKS_SUCCESS');
export const fetchLinksFailure = createAction('FETCH_LINKS_FAILURE');

export const fetchLinks = () => async (dispatch) => {
  try {
    dispatch(fetchLinksRequest());

    setTimeout(() => {
      const links = {
        link1: 'http://link1.com',
        link2: 'http://link2.com',
      };

      dispatch(fetchLinksSuccess(links));
    }, 1500);
  } catch (error) {
    dispatch(fetchLinksFailure(error));
  }
};
