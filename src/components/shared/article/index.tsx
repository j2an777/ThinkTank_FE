import Comment from '../comment';
import Likes from '../likes';
import Pass from '../pass';

import * as S from './styles';

interface ArticleProps {
  postId: number;
  title: string;
  content: {
    __html: string;
  };
  likeCount: number;
  likeType: boolean;
  commentCount: number;
  answerCount: number;
}

// 게시글 컴포넌트 (마이페이지에서 활용 가능)
const Article: React.FC<ArticleProps> = ({
  postId,
  title,
  content,
  likeCount,
  likeType,
  commentCount,
  answerCount,
}) => {
  return (
    <S.ArticleContainer>
      <S.ArTitleBlock>{title}</S.ArTitleBlock>
      <S.ArContentBlock dangerouslySetInnerHTML={content} />
      <S.ArDataBlock>
        <Likes likeCount={likeCount} likeType={likeType} postId={postId} />
        <Comment commentCount={commentCount} />
        <Pass answerCount={answerCount} />
      </S.ArDataBlock>
    </S.ArticleContainer>
  );
};

export default Article;
