import axios from 'axios';

// NOTE: dev, prod で問い合わせ先が変更になる
const devMode = process.env.NODE_ENV === 'development' ?? false;

const axiosInstance = axios.create({
  baseURL: devMode
    ? 'http://localhost:5001/hosonokotaro-blog/asia-northeast1/api'
    : 'https://asia-northeast1-hosonokotaro-blog.cloudfunctions.net/api',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});

export default axiosInstance;
