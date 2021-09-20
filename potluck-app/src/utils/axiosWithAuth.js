import axios from 'axios';

export const axiousWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: '' // base url here
  });
};