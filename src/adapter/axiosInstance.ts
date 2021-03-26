import axios, { AxiosInstance } from 'axios';

import { Auth } from './firebase';

// NOTE: dev: local, prod: cloud functions
const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5001/hosonokotaro-blog/asia-northeast1/api'
    : 'https://asia-northeast1-hosonokotaro-blog.cloudfunctions.net/api';

const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});

export default axiosInstance;

// NOTE: Edit 画面認証
export const axiosAuthenticatedInstance = (): AxiosInstance => {
  let bearerToken = '';

  if (Auth.currentUser) {
    Auth.currentUser
      .getIdToken(true)
      .then((idToken) => {
        bearerToken = idToken;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    },
    responseType: 'json',
  });
};
