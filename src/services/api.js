import axios from 'axios';

axios.defaults.baseURL = 'https://63ffa9a89f8449102982c6ee.mockapi.io';

export async function getCards(params) {
  return await axios.get(`/users`, { params });
}