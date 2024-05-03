import { Icon } from '@/components/shared';

import * as S from './styles';
import Article from '@/components/shared/article';
import { ArticleItem } from '@/types/article';

interface ListItemProps {
  listItem: ArticleItem;
}

const MainListItem: React.FC<ListItemProps> = ({ listItem }) => {
  return (
    <S.MltContainer>
      <S.MlUserBox>
        {listItem.author.profileImage ? (
          <img src={listItem.author.profileImage} />
        ) : (
          <Icon value="user" />
        )}
        <S.MlInfoBlock>
          <h3>{listItem.author.nickName}</h3>
          <p>{listItem.createdAt}</p>
        </S.MlInfoBlock>
      </S.MlUserBox>
      <Article
        postId={listItem.postId}
        title={listItem.title}
        content={listItem.content}
        likeCount={listItem.likeCount}
        likeType={listItem.likeType}
        commentCount={listItem.commentCount}
        answerCount={listItem.answerCount}
      />
    </S.MltContainer>
  );
};

export default MainListItem;
