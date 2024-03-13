import axois from 'axios';
import Cookies from 'js-cookie';

const ExpApi = axois.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
});

export const getAllExp = async () => {
  try {
    const response = await ExpApi.get('experince');
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('failed to fetch');
    }
  } catch (error) {
    console.error('Error frtching in:', error);
    throw error;
  }
};
