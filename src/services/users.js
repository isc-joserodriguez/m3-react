import axios from 'axios';

const URL_ROOT = `${process.env.REACT_APP_API}/user`;

export const loginService = async (data) => {
  const resp = await axios.post(`${URL_ROOT}/login`, data);
  return resp.data
}

export const signupService = async (data) => {
  const resp = await axios.post(`${URL_ROOT}/signup`, data);
  return resp.data
}