import { ArticleItem } from '@/types/article';
import Comment from '../comment';
import Likes from '../likes';
import Pass from '../pass';
import * as S from './styles';

interface ArticleProps {
    article: ArticleItem;
}

// 게시글 컴포넌트 (마이페이지에서 활용 가능)
const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
        <S.ArticleContainer>
            <S.ArTitleBlock>{ article.title }</S.ArTitleBlock>
            <S.ArContentBlock dangerouslySetInnerHTML={ article.content } />
            <S.ArDataBlock>
                <Likes likeCount={ article.likeCount } likeType={ article.likeType } postId={ article.postId } />
                <Comment commentCount={ article.commentCount } />
                <Pass answerCount={ article.answerCount } />
            </S.ArDataBlock>
        </S.ArticleContainer>
    )
}

export default Article;