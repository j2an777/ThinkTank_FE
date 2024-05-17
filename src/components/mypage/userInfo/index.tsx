import { Icon, UserCircle } from '@/components/shared';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/types/auth.ts';
import { IconValues } from '@/components/shared/icon';
import { getUserInfo } from '@/apis/user';
import { getOthersProfile } from '@/apis/mypage';

const UserInfo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<User | null>(null);

  const updateUserData = (userData: User) => {
    setData(userData);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const queryEmail = new URLSearchParams(location.search).get('user');
      let userData;

      if (queryEmail) {
        // 타인 프로필 조회
        userData = await getOthersProfile(queryEmail);
      } else {
        // 내 프로필 조회
        userData = await getUserInfo();
        navigate(`?user=${userData.email}`, { replace: true });
      }

      if (userData) {
        updateUserData(userData);
      }
    };
    fetchUserData();
  }, [location.search, navigate]);

  const contactInfo = [
    { key: 'email', value: data?.email, icon: 'email' },
    { key: 'github', value: data?.github, icon: 'github' },
    { key: 'blog', value: data?.blog, icon: 'blog' },
  ];

  return (
    <S.Container>
      <S.LeftBox>
        <UserCircle size={150} profileImage={data?.profileImage} />
      </S.LeftBox>
      <S.RightBox>
        <S.Edit onClick={() => navigate('modify')}>
          <Icon value="settings" />
        </S.Edit>
        <S.UserName>{data?.nickname}</S.UserName>
        <S.Contact>
          {contactInfo.map(
            (info) =>
              info.value && (
                <S.Block key={info.key}>
                  <Icon value={info.icon as IconValues} />
                  {info.value}
                </S.Block>
              ),
          )}
        </S.Contact>
        <S.UserIntro>{data?.introduce}</S.UserIntro>
      </S.RightBox>
    </S.Container>
  );
};

export default UserInfo;
