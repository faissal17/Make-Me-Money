import axois from 'axios';

const problemeApi = axois.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  withCredentials: true,
});

export const getAllprobleme = async () => {
  try {
    const response = await problemeApi.get('probleme');
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

export const getUserProbleme = async (userId) => {
  try {
    const response = await problemeApi.get(`probleme/current/${userId}`);
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
