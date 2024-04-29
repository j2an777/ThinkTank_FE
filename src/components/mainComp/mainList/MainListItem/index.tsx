import { Comment, Icon, Likes, Pass } from "@/components/shared"

import * as S from './styles';
import * as A from '../../../shared/Article';
import { List } from "@/types/list";

interface ListItemProps {
    listItem: List;
}

const MainListItem: React.FC<ListItemProps> = ({ listItem }) => {
  return (
    <S.MltContainer>
        <S.MlUserBox>
            <Icon value="profile" />
            <S.MlInfoBlock>
                <h3>{listItem.nickname}</h3>
                <p>{listItem.createdAt}</p>
            </S.MlInfoBlock>
        </S.MlUserBox>
        <A.ArticleBox>
            <A.ArTitle>{listItem.title}</A.ArTitle>
            <A.ArContent dangerouslySetInnerHTML={ listItem.content } />
            <S.MlDataBlock>
                <Likes like={listItem.like} />
                <Comment comments={listItem.comment} />
                <Pass passes={listItem.check} />
            </S.MlDataBlock>
        </A.ArticleBox>
    </S.MltContainer>
  )
}

export default MainListItem