import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/286585/', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10 * 1000, // request timeout
});

type RUnknown = Record<string, unknown>;
/* 统一封装get请求 */
export const get = (url: string, params: RUnknown, config = {}) => new Promise((resolve, reject) => {
  service({
    method: 'get',
    url,
    params,
    ...config,
  }).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
});

/* 统一封装post请求  */
export const post = (url: string, data: RUnknown, config = {}) => new Promise((resolve, reject) => {
  service({
    method: 'post',
    url,
    data,
    ...config,
  }).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
});
