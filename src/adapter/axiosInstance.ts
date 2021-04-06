import axios from 'axios';

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
