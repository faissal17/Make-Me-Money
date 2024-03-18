import Cookies from 'js-cookie';

export const isAuth = () => {
  const authToken = Cookies.get('token');
  return authToken ? true : false;
};
