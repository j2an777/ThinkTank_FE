import * as S from './styles';
import React, { ReactNode } from 'react';
import InfoStatus from '../infoStatus';
import { useNavigate } from 'react-router-dom';
import { ArticleType } from '@/types';
import { useLike } from '@/hooks/like/useLike';
import { IconValues } from '../icon';

// ArticleItem 타입에서 author 제외한 타입 정의
type ArticleTypes = Omit<ArticleType, 'user'>;

interface ArticleProps {
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
  const navigate = useNavigate();

  const { likeCount, likeType, toggleLike } = useLike(article.postId, article.likeCount, article.likeType);

  const iconValue: IconValues = likeType ? 'yeslike' : 'nolike';

  // statusFlag가 open인 경우(상세페이지인 경우) 문제 내용 그대로, 나머지 경우에서는 10번째 라인까지 제한
  const contentNode =
    statusFlag === 'open'
      ? formatContent(article.content, 10)
      : formatContent(article.content);

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
          <>
            <InfoStatus
              value={iconValue}
              count={likeCount}
              onClick={(e) => {
                e.stopPropagation();
                toggleLike();
              }}
            />
            <InfoStatus value="comment" count={article.commentCount} />
            <InfoStatus value="check" count={article.codeCount} />
          </>
        )}
      </S.ArDataBlock>
    </S.ArticleContainer>
  );
};

export default Article;
