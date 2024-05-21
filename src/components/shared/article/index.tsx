import * as S from './styles';
import React, { ReactNode } from 'react';
import InfoStatus from '../infoStatus';
import { useNavigate } from 'react-router-dom';
import { ArticleType } from '@/types';
import { useLike } from '@/hooks/like/useLike';
import Icon, { IconValues } from '../icon';
import Text from '../Text';
import { useModalContext } from '@/contexts/ModalContext';
import { deleteArticle } from '@/apis/article';

type ArticleTypes = Omit<ArticleType, 'user'>;

interface ArticleProps {
  threedot?: ReactNode;
  statusFlag?: string;
  isOwner?: boolean;
  article: ArticleTypes;
}

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

const Article = ({ article, statusFlag, isOwner }: ArticleProps) => {
  const navigate = useNavigate();
  const { open } = useModalContext();

  const { likeCount, likeType, toggleLike } = useLike(
    article.postId,
    article.likeCount,
    article.likeType,
  );

  const iconValue: IconValues = likeType ? 'yeslike' : 'nolike';

  const contentNode =
    statusFlag === 'open'
      ? formatContent(article.content, 8)
      : formatContent(article.content);

  const toHandleDetail = () => {
    navigate(`/detail/${article.postId}`);
  };

  const onHandleSetting = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isOwner) {
      open({
        title: '설정',
        type: 'setting',
        buttonLabel: '삭제',
        flag: true,
        onButtonClick: async () => {},
      });
    } else {
      open({
        title: '설정',
        type: 'setting',
        flag: false,
        onButtonClick: async () => await deleteArticle(article.postId),
      });
    }
  };

  return (
    <S.ArticleContainer onClick={toHandleDetail}>
      <S.ArTopBox>
        <Text typography="t1" bold="regular" color="black">
          {article.title}
        </Text>
        {statusFlag === 'open' && (
          <Icon value="threedot" color="black" onClick={(e) => onHandleSetting(e)} />
        )}
      </S.ArTopBox>
      <S.ArContentBlock>{contentNode}</S.ArContentBlock>
      <S.ArDataBlock>
        <InfoStatus
          value={iconValue}
          count={likeCount}
          onClick={(e) => {
            e.stopPropagation();
            toggleLike();
          }}
        />
        <InfoStatus value="comment" count={article.commentCount} $active={false} />
        <InfoStatus value="check" count={article.codeCount} $active={false} />
      </S.ArDataBlock>
    </S.ArticleContainer>
  );
};

export default Article;
