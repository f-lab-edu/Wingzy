import axios from 'axios';

export const deleteCarts = async (product: object) => {
  const url = '/api/cart';
  const response = await axios.delete(url, { data: { product: product } });
  return response;
};
