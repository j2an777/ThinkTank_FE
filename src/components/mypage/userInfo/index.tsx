import { Icon, UserCircle } from '@/components/shared';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/types/auth.ts';
import { IconValues } from '@/components/shared/icon';
import { useNickname } from '@/stores/mypage';
import { getUserInfo } from '@/apis/user';

import * as S from './styles';
=======
import * as S from './styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '@/types/auth.ts';
import { IconValues } from '@/components/shared/icon';
import { useEmail } from '@/stores/mypage';
import { getUserInfo } from '@/apis/user';
>>>>>>> origin/dev

const UserInfo = () => {
  const navigate = useNavigate();
  const { setEmail } = useEmail();
  const [data, setData] = useState<User>({
    email: '',
    nickname: '',
    github: '',
    blog: '',
    introduce: '',
    profileImage: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserInfo();
      if (data) {
        setData({
          email: data.email,
          nickname: data.nickname,
          github: data.github,
          blog: data.blog,
          introduce: data.introduce,
          profileImage: data.profileImage,
        });
        setEmail(data.email);
      }
    };

    fetchUserData();
  }, []);

  const contactInfo = [
    { key: 'email', value: data.email, icon: 'email' },
    { key: 'github', value: data.github, icon: 'github' },
    { key: 'blog', value: data.blog, icon: 'blog' },
  ];

  return (
    <S.Container>
      <S.LeftBox>
        <UserCircle size={150} profileImage={data.profileImage} />
      </S.LeftBox>
      <S.RightBox>
        <S.Edit onClick={() => navigate('modify')}>
          <Icon value="settings" />
        </S.Edit>
        <S.UserName>{data.nickname}</S.UserName>
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
        <S.UserIntro>{data.introduce}</S.UserIntro>
      </S.RightBox>
    </S.Container>
  );
};

export default UserInfo;
