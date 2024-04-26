import { jwtDecode } from 'jwt-decode';

export const getId = () => {
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  console.log(decoded);
  return decoded.id;
};

export const isTokenValid = () => {
  const token = localStorage.getItem('token');
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded && decoded.exp && decoded.exp > currentTime) {
      return true;
    } else return false;
  } catch (e) {
    return false;
  }
};

export const checkRole = role => {
  const token = localStorage.getItem('token');
  try {
    const decoded = jwtDecode(token);
    return role == decoded.role;
  } catch (e) {
    return false;
  }
};
