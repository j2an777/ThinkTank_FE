import { ArticleItem } from '@/types/article';
import * as S from './styles';
import React, { ReactNode } from 'react';
import { Status } from '../infoStatus';

// ArticleItem 타입에서 author 제외한 타입 정의
type ArticleTypes = Omit<ArticleItem, 'author'>;

interface ArticleProps {
    article: ArticleTypes;
    threedot?: ReactNode;
    statusFlag: string;
}

// string에서 들여쓰기를 <br/>태그로 인식
const formatContent = (content: string): ReactNode => {
    return content.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br/>
        </React.Fragment>
    ));
};

// 게시글 컴포넌트 (마이페이지에서 활용 가능)
const Article = ({ article, threedot, statusFlag }: ArticleProps) => {
    return (
        <S.ArticleContainer>
            <S.ArTopBox>
                <S.ArTitleBlock>{ article.title }</S.ArTitleBlock>
                {/* 마이페이지에서는 threedot 위치 입니다. */}
                {threedot}
            </S.ArTopBox>
            {/* textarea로 받을 것이기 때문에 string으로 받기 */}
            <S.ArContentBlock>{ formatContent(article.content) }</S.ArContentBlock>
            <S.ArDataBlock>
                {/* map으로 하나의 컴포넌트로 구현하기 */}
                {statusFlag === 'open' && <Status 
                    postId={article.postId}
                    likeCount={article.likeCount}
                    likeType={article.likeType}
                    commentCount={article.commentCount}
                    answerCount={article.answerCount} /> }
            </S.ArDataBlock>
        </S.ArticleContainer>
    )
}

export default Article;
