import axios from "axios";

const axiosInstance = axios.create({
   baseURL: 'https://api.minimartstore.great-site.net/api',
  // baseURL: 'http://127.0.0.1:8000/',
});

export default axiosInstance;