import axios from 'axios';
import { API_CANCEL_CODE } from '@common/constants';
import ApiError from '@common/ApiError';

const { CancelToken } = axios;
const instance = axios.create({
  withCredentials: false,
  baseURL: '/api',
  timeout: 60000,
});

let source = CancelToken.source();
const cancelFetch = () => {
  source.cancel(API_CANCEL_CODE);
  source = CancelToken.source();
};

const handleResponse = (res) => {
  if (typeof res.data !== 'object' || (!res.data?.code && !res.data?.message)) {
    return Promise.reject(new ApiError('Unknown Error Code', 'Unknown Error Message'));
  }

  if (res.data?.code === '200' || res.data?.content) {
    return res.data;
  }

  cancelFetch();
  return Promise.reject(new ApiError(res.data.code, res.data.message));
};

const makeCancelResponse = (res) => {
  if (axios.isCancel(res)) {
    return Promise.reject(new ApiError('API Canceled', res.message));
  }
  return Promise.reject(new ApiError(res.message, res.message));
  // return Promise.reject({ code: res.message, message: res.message });
};

instance.interceptors.response.use(handleResponse, makeCancelResponse);

const requests = {
  get: (url, params, addHeaders) =>
    instance.get(url, {
      cancelToken: source.token,
      headers: { ...addHeaders },
      params,
    }),
  post: (url, data, addHeaders, options) =>
    instance.post(url, data, { cancelToken: source.token, headers: { ...addHeaders }, ...options }),
  put: (url, data, addHeaders, options) =>
    instance.put(url, data, { cancelToken: source.token, headers: { ...addHeaders }, ...options }),
  delete: (url, addHeaders, options) =>
    instance.delete(url, { cancelToken: source.token, headers: { ...addHeaders }, data: options }),
};

export default requests;
