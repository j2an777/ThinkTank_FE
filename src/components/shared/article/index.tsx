import { Article } from '@/types/article';
import * as S from './styles';
import React, { ReactNode } from 'react';
import { Status } from '../infoStatus';
import { useNavigate } from 'react-router-dom';

// ArticleItem 타입에서 author 제외한 타입 정의
type ArticleTypes = Omit<Article, 'user'>;

interface ArticleProps {
  article: ArticleTypes;
  threedot?: ReactNode;
  statusFlag: string;
}

// string에서 들여쓰기를 <br/>태그로 인식
const formatContent = (content: string, maxLines: number = Infinity): ReactNode => {
  const lines = content.split('\n');
  const limitedLines = lines.slice(0, maxLines);

  return (
    <>
      {limitedLines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
      {lines.length > maxLines && (
        <span>
          <br />
          <br />
          ... 더 보기
        </span>
      )}
    </>
  );
};

// 게시글 컴포넌트 (마이페이지에서 활용 가능)
const Article = ({ article, threedot, statusFlag }: ArticleProps) => {
  // statusFlag가 open인 경우(상세페이지인 경우) 문제 내용 그대로, 나머지 경우에서는 10번째 라인까지 제한
  const contentNode =
    statusFlag === 'open'
      ? formatContent(article.content, 10)
      : formatContent(article.content);
  const navigate = useNavigate();

  const toHandleDetail = () => {
    navigate(`/detail/${article.postNumber}`);
  };

  return (
    <S.ArticleContainer onClick={toHandleDetail}>
      <S.ArTopBox>
        <S.ArTitleBlock>{article.title}</S.ArTitleBlock>
        {/* 마이페이지에서는 threedot 위치 입니다. */}
        {threedot}
      </S.ArTopBox>
      <S.ArContentBlock>{contentNode}</S.ArContentBlock>
      <S.ArDataBlock>
        {statusFlag === 'open' && (
          <Status
            postNumber={article.postNumber}
            likeCount={article.likeCount}
            likeType={article.likeType}
            commentCount={article.commentCount}
            answerCount={article.answerCount}
          />
          //       <InfoStatus
          //     value={iconValue}
          //     count={updatedLikeCount}
          //     onClick={(e) => {
          //       e.stopPropagation();
          //       toggleLike();
          //     }}
          //   />
          //   <InfoStatus value="comment" count={commentCount} />
          //   <InfoStatus value="check" count={answerCount} />
        )}
      </S.ArDataBlock>
    </S.ArticleContainer>
  );
};

export default Article;
