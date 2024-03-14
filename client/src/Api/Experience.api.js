import axois from 'axios';

const ExpApi = axois.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  withCredentials: true,
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
export const getUserExperiences = async (userId) => {
  try {
    const response = await ExpApi.get(`experince/current/${userId}`);
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
export const createExp = async (expData) => {
  try {
    const response = await ExpApi.post('experince', expData);
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

export const deleteExperiences = async (ExpId) => {
  try {
    const response = await ExpApi.delete(`experince/${ExpId}`);
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
