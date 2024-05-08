import { UserCircle } from '@/components/shared/index.ts';
import * as S from './styles.ts';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMyPage } from '@/apis/mypage.ts';
import { User } from '@/types/auth.ts';

const UserInfo = () => {
  const [userData, setUserData] = useState<User>({
    email: '',
    nickname: '',
    github: '',
    blog: '',
    introduce: '',
    profileImage: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getMyPage();
      if (data) {
        setUserData({
          email: data.email,
          nickname: data.nickname,
          github: data.github,
          blog: data.blog,
          introduce: data.introduce,
          profileImage: data.profileImageResDto?.fileUrl,
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
