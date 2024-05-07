import { useLocation } from 'react-router-dom';

const useGetPathname = () => {
  const { pathname } = useLocation();

  return pathname.replace('/', '').split('/');
};

export default useGetPathname;
