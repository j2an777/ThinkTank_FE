import axios from 'axios';

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem('access');
  const response = await axios.post('api/refresh', {
    headers: {
      access: accessToken,
    },
    withCredentials: true,
  });
  return response.data;
};
