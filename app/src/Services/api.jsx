import axios from 'axios';

const axiosInstance = axios.create({
  baseUrl: 'https://newsapi.org/',
  timeout: 5000,
});

export default axiosInstance;
