import axios from 'axios';

const API_URL = 'http://localhost:3030';

export const login = (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const signup = (email: string, password: string) => {
  return axios.post(`${API_URL}/register`, { email, password });
};  
