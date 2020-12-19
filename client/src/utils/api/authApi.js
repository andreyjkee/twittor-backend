/* eslint-disable no-unused-vars */
import { axios, get, post } from './base/index';
import { apiUrl } from './base/axios';

export default {
  signUp: credentials => post(`${apiUrl}/auth/register`, credentials),
  signIn: credentials => post(`${apiUrl}/auth/login`, credentials), //
};
