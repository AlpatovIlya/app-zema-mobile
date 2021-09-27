import axios from 'axios';

const api = axios.create({
  baseURL: 'http://serverzema.info/api',
  headers: {
    Accept: 'application/json',
  },
});

export {api};
