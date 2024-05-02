
// 보호된 라우트 완성짓기
const ProtectedRoute = () => {
  const accessToken = localStorage.getItem('accessToken');

  // accessToken이 없다면 로그인 페이지로 리디렉트
  if (!accessToken) {
    return ;
  }

  // accessToken이 있다면 요청한 컴포넌트를 렌더링
  return ;
};

export default ProtectedRoute;
