import { Icon } from '@/components/shared';
import * as S from './styles';
import { Article } from '@/types/index';
import Article from '@/components/shared/article';

interface ListItemProps {
  listItem: Article;
}

const MainListItem = ({ listItem }: ListItemProps) => {
  // 구조 분해 할당으로 author과 그 외 나머지 정보들로 분리
  const { user, ...articleDetails } = listItem;

  return (
    <S.MltContainer>
      <S.MlUserBox>
        <S.AvatarBlock>
          {user.profileImage ? (
            <img src={user.profileImage} />
          ) : (
            <Icon value="user" size={50} />
          )}
        </S.AvatarBlock>
        <S.MlInfoBlock>
          <h3>{user.nickname}</h3>
          <p>{listItem.createdAt}</p>
        </S.MlInfoBlock>
      </S.MlUserBox>
      <Article article={articleDetails} statusFlag="open" />
    </S.MltContainer>
  );
};

export default MainListItem;
