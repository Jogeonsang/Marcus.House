import axios from 'axios';

export const getProducts = (category: string | number) => {
  return axios.get(`http://localhost:8080/products/${category}`);
}
