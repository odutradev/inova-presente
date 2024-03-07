import axios from 'axios';


var token = localStorage.getItem('token');

const api = axios.create({
  baseURL:' https://6a044381-889e-4cae-a678-3243667b9329-00-1rq7mgbuve224.worf.replit.dev/v1',
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;