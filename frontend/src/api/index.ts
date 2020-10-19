import axios from 'axios';

export const getProducts = (category: string | number, limit:number, offset:number) => {
  return axios.get(`http://localhost:8080/products?categoryId=${category}&offset=${offset}&limit=${limit}`);
}
