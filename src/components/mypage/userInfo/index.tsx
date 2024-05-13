import { Icon, UserCircle } from '@/components/shared/index.ts';
import * as S from './styles.ts';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '@/apis/mypage.ts';
import { User } from '@/types/auth.ts';
import { IconValues } from '@/components/shared/icon/index.tsx';
import { useNickname } from '@/stores/mypage.ts';

const UserInfo = () => {
  const navigate = useNavigate();
  const { setNickname } = useNickname();
  const [userData, setUserData] = useState<User>({
    email: 'email',
    nickname: '',
    github: 'github',
    blog: 'blog',
    introduce: '',
    profileImage: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserInfo();
      if (data) {
        setUserData({
          email: data.email,
          nickname: data.nickname,
          github: data.github,
          blog: data.blog,
          introduce: data.introduce,
          profileImage: data.profileImageResDto?.fileUrl,
        });
        setNickname(data.nickname);
      }
    };

    fetchUserData();
  }, []);

  const contactInfo = [
    { key: 'email', value: userData.email, icon: 'email' },
    { key: 'github', value: userData.github, icon: 'github' },
    { key: 'blog', value: userData.blog, icon: 'blog' },
  ];

  return (
    <S.Container>
      <S.LeftBox>
        <UserCircle size={150} profileImage={userData.profileImage} />
      </S.LeftBox>
      <S.RightBox>
        <S.Edit onClick={() => navigate('modify')}>
          <Icon value="settings" />
        </S.Edit>
        <S.UserName>{userData.nickname}</S.UserName>
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
        <S.UserIntro>{userData.introduce}</S.UserIntro>
      </S.RightBox>
    </S.Container>
  );
};

export default UserInfo;
