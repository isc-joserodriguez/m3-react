import axios from 'axios';

const URL_ROOT = `${process.env.REACT_APP_API}/category`;

export const getCategories = async () => {
  const resp = await axios.get(`${URL_ROOT}/`);
  return resp.data
}