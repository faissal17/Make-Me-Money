import axois from 'axios';
import Cookies from 'js-cookie';

const userApi = axois.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  withCredentials:true
});

export const getAllUsers = async () => {
  try {
    const response = await userApi.get('/user');
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await userApi.get('/user/current');
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('fetching current user failed');
    }
  } catch (error) {
    console.error('Error fetching current user in:', error);
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await userApi.put(`/user/${userId}`, userData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to update');
    }
  } catch (error) {
    console.error('Error updating experience:', error);
    throw error;
  }
};