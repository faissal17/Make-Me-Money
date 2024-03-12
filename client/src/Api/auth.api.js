import axois from 'axios';
import Cookies from 'js-cookie';

const AuthApi = axois.create({
  baseURL: 'http://localhost:3000/api/auth/',
  timeout: 5000,
});

export const login = async (email, password) => {
  try {
    const response = await AuthApi.post('/login', {
      email: email,
      password: password,
    });

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

export const register = async (name, email, password) => {
  try {
    const response = await AuthApi.post('/register', {
      name: name,
      email: email,
      password: password,
    });
    if (response.status === 201) {
      const token = response.data.token;
      Cookies.set('token', token);
    } else {
      throw new Error('Register failed');
    }
  } catch (error) {
    console.error('Error in Register:', error);
    throw error;
  }
};
