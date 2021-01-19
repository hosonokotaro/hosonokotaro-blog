import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://asia-northeast1-hosonokotaro-blog.cloudfunctions.net/api',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});

export default axiosInstance;
