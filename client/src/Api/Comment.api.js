import axois from 'axios';

const commentApi = axois.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  withCredentials: true,
});

export const addComment = async (commentData, commentId) => {
  try {
    const response = await commentApi.post(`comment/${commentId}`, commentData);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('failed to fetch');
    }
  } catch (error) {
    console.error('Error frtching in:', error);
    throw error;
  }
};

export const getComment = async () => {
  try {
    const response = await commentApi.get('comment');
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('failed to fetch');
    }
  } catch (error) {
    console.error('Error frtching in:', error);
    throw error;
  }
};
