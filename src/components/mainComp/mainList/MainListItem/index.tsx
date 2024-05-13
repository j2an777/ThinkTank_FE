import { Icon } from '@/components/shared';
import * as S from './styles';
import Article from '@/components/shared/article';
import { ArticleItem } from '@/types/article';
import React from 'react';

interface ListItemProps {
  listItem: ArticleItem;
}

const MainListItem = React.memo(({ listItem }: ListItemProps) => {

    // 구조 분해 할당으로 author과 그 외 나머지 정보들로 분리
    const { author = { profileImage: '', nickName: 'Unknown' }, ...articleDetails } = listItem;

    return (
        <S.MltContainer>
            <S.MlUserBox>
                <S.AvatarBlock>
                {author.profileImage ? 
                    <img src={author.profileImage} alt={author.nickName}/> : <Icon value="user" size={50}/>
                }
                </S.AvatarBlock>
                <S.MlInfoBlock>
                    <h3>{author.nickName}</h3>
                    <p>{listItem.createdAt}</p>
                </S.MlInfoBlock>
            </S.MlUserBox>
            <Article article={articleDetails} statusFlag='open' />
        </S.MltContainer>
    )
});

export default MainListItem;
