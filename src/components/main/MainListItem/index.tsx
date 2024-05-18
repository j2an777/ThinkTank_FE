import { Icon, Text } from '@/components/shared';
import * as S from './styles';
import Article from '@/components/shared/article';
import { ArticleType } from '@/types';
import getTimeDifference from '@/utils/getTimeDifference';
import { Link } from 'react-router-dom';

interface ListItemProps {
  listItem: ArticleType;
}

const MainListItem = ({ listItem }: ListItemProps) => {
  // 구조 분해 할당으로 author과 그 외 나머지 정보들로 분리
  const { user, ...articleDetails } = listItem;
  const createDate = getTimeDifference(listItem.createdAt);

  return (
    <S.MltContainer>
      <S.MlUserBox>
        <S.AvatarBlock>
          {user.profileImage ? (
            <img src={user.profileImage} />
          ) : (
            <Icon value="user" size={105} $active={false}/>
          )}
        </S.AvatarBlock>
        <S.MlInfoBlock>
          <Link to={`/users/profile?user=${user.email}`}>
            <Text typography="t2" bold="semibold" color="black">{user.nickname}</Text>
          </Link>
          <Text typography='t4' bold='semibold' color='gray200'>{createDate}</Text>
        </S.MlInfoBlock>
      </S.MlUserBox>
      <Article article={articleDetails} />
    </S.MltContainer>
  );
};

export default MainListItem;
