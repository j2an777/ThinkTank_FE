import { Icon, UserCircle, Text } from '@/components/shared';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/types/auth.ts';
import { IconValues } from '@/components/shared/icon';
import { getUserInfo } from '@/apis/user';
import { getOthersProfile } from '@/apis/mypage';

import * as S from './styles';

const UserInfo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<User | null>(null);
  const [isOwner, setIsOwner] = useState(false);

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

    if (location.pathname.includes('mypage')) {
      setIsOwner(true);
    }

    fetchUserData();
  }, []);

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
        {isOwner && (
          <S.Edit onClick={() => navigate('modify')}>
            <Icon value="settings" />
          </S.Edit>
        )}
        <Text typography="t2" color="black" bold="bold">
          {data?.nickname}
        </Text>
        <S.Contact>
          {contactInfo.map(
            (info) =>
              info.value && (
                <S.Block key={info.key}>
                  <Icon
                    value={info.icon as IconValues}
                    $active={false}
                    css={{ width: '30px' }}
                  />
                  <S.Info>{info.value}</S.Info>
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
