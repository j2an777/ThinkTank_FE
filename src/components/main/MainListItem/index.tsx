import { Icon, Text } from '@/components/shared';
import * as S from './styles';
import Article from '@/components/shared/article';
import { ArticleType } from '@/types';
import getTimeDifference from '@/utils/getTimeDifference';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ListItemProps {
  listItem: ArticleType;
}

const MainListItem = ({ listItem }: ListItemProps) => {
  // 구조 분해 할당으로 author과 그 외 나머지 정보들로 분리
  const { user, ...articleDetails } = listItem;
  const createDate = getTimeDifference(listItem.createdAt);
  const [iconSize, setIconSize] = useState(105);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIconSize(70);
      } else {
        setIconSize(105);
      }
    };

    window.addEventListener('resize', handleResize);

    // 초기 크기 설정
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.MltContainer>
      <S.MlUserBox>
        <S.AvatarBlock>
          {user.profileImage ? (
            <img src={user.profileImage} />
          ) : (
            <Icon value="user" size={iconSize} $active={false} />
          )}
        </S.AvatarBlock>
        <S.MlInfoBlock>
          <Link to={`/profile?user=${user.email}`}>
            <Text typography="t2" bold="semibold" color="black" id="userP">
              {user.nickname}
            </Text>
          </Link>
          <Text typography="t4" bold="semibold" color="gray200" id="createP">
            {createDate}
          </Text>
        </S.MlInfoBlock>
      </S.MlUserBox>
      <Article article={articleDetails} />
    </S.MltContainer>
  );
};

export default MainListItem;
