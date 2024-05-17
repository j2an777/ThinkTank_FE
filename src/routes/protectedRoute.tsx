import { getAccess } from '@/hooks/auth/useLocalStorage';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: ReactElement;
}

// 보호된 라우트 완성짓기
const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const accessToken = getAccess();

  // accessToken이 없다면 로그인 페이지로 리디렉트
  return accessToken ? element : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
