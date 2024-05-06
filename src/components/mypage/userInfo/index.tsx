import { UserCircle } from '@/components/shared/index.ts';
import * as S from './styles.ts';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMyPage } from '@/apis/mypage.ts';
import { User } from '@/types/auth.ts';

const UserInfo = () => {
  const [userData, setUserData] = useState<User>({
    nickname: 'Soohyun Kim',
    profileImage: null,
    email: 'soo@gmail.com',
    introduce: 'hello',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getMyPage();
      if (data) {
        setUserData({
          nickname: data.nickname,
          profileImage: data.profileImage,
          email: data.email,
          introduce: data.introduce,
        });
      }
    };

    fetchUserData();
  }, []);

  return (
    <S.Container>
      <S.LeftBox>
        <UserCircle size={150} profileImage={userData.profileImage} />
      </S.LeftBox>
      <S.RightBox>
        <Link to="profile">
          <S.Edit>편집</S.Edit>
        </Link>
        <S.UserName>{userData.nickname}</S.UserName>
        <S.UserEmail>{userData.email}</S.UserEmail>
        <S.UserIntro>{userData.introduce}</S.UserIntro>
      </S.RightBox>
    </S.Container>
  );
};

export default UserInfo;
