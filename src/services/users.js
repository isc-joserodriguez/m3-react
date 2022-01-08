import axios from 'axios';

const URL_ROOT = `${process.env.REACT_APP_API}/user`;

export const signupService = async (user) => {
  const resp = await axios.post(`${URL_ROOT}/signup`, user);
  return resp.data
}

export const loginService = async (user) => {
  console.log(user);
  const resp = await axios.post(`${URL_ROOT}/login`, user);
  return resp.data
}
