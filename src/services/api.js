import config from '../assets/config';
import axios from 'axios';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;