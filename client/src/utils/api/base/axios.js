import axios from 'axios';

export const apiUrl = 'http://localhost:8000';

export const defaultParams = {
  headers: { Authorization: localStorage.getItem('token') },
};

export default axios;
