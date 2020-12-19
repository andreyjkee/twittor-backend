import { get } from './base/index';
import { apiUrl } from './base/axios';

export default {
  getCurrent: () => get(`${apiUrl}/user/current`),
};
