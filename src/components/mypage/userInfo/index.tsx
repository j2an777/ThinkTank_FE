import { Icon, UserCircle } from '@/components/shared';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconValues } from '@/components/shared/icon';
import { useNickname } from '@/stores/mypage';
import { getUserInfo } from '@/apis/user';

const UserInfo = () => {
  const navigate = useNavigate();
  const { setNickname } = useNickname();
  const data = getUserInfo();
  setNickname(data.email);

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
