import axois from 'axios';
import Cookies from 'js-cookie';

const AuthApi = axois.create({
  baseURL: 'http://localhost:3000/api/auth/',
  timeout: 5000,
  withCredentials:true
});

export const login = async (email, password) => {
  try {
    const response = await AuthApi.post('/login', {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      const token = response.data.token;
      Cookies.set('token', token);
      console.log(token);
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
      console.log(token);
    } else {
      throw new Error('Register failed');
    }
  } catch (error) {
    console.error('Error in Register:', error);
    throw error;
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await AuthApi.post('/forgetpassword', {
      email: email,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error in operation');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const resetPassword = async (password, token) => {
  try {
    const response = await AuthApi.post(`/resetpassword?token=${token}`, {
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('reset password failed');
    }
  } catch (error) {
    console.error('Error while reseting the password in:', error);
    throw error;
  }
};
