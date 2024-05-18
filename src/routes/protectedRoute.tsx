import { useModalContext } from '@/contexts/ModalContext';
import { getAccess } from '@/hooks/auth/useLocalStorage';
import { ReactElement, useEffect } from 'react';

interface ProtectedRouteProps {
  element: ReactElement;
}

// 보호된 라우트 완성짓기
const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const accessToken = getAccess();
  const { open } = useModalContext();

  useEffect(() => {
    if (!accessToken) {
      open({
        onButtonClick: () => {
          window.location.href = "/login";
        },
        title: '로그인이 필요합니다',
        description: '이 페이지를 보려면 로그인해야 합니다.',
        type: 'alert',
        buttonLabel: '로그인 하기',
      });
    }
  }, [accessToken, open]);

  return accessToken ? element : null;
};

export default ProtectedRoute;
