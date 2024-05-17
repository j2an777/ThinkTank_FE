export const LOCAL_STORAGE = {
  ACCESS: 'access',
};

export const setAccess = (accessToken: string) => {
  localStorage.setItem(LOCAL_STORAGE.ACCESS, accessToken);
};

export const getAccess = () => {
  return localStorage.getItem(LOCAL_STORAGE.ACCESS);
};

export const removeAccess = () => {
  return localStorage.removeItem(LOCAL_STORAGE.ACCESS);
};
