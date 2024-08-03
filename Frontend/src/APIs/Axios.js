import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://api.minimartstore.great-site.net/',
});

export default axiosInstance;