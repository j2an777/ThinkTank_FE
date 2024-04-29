import { Icon } from "@/components/shared"

import * as S from './styles';
import Article from "@/components/shared/article";
import { List } from "@/types/article";

interface ListItemProps {
    listItem: List;
}

const MainListItem: React.FC<ListItemProps> = ({ listItem }) => {

    return (
        <S.MltContainer>
            <S.MlUserBox>
                {listItem.author.profileImage ? 
                    <img src={listItem.author.profileImage} /> : <Icon value="profile" />
                }
                <S.MlInfoBlock>
                    <h3>{listItem.author.nickName}</h3>
                    <p>{listItem.article.createdAt}</p>
                </S.MlInfoBlock>
            </S.MlUserBox>
            <Article article={listItem.article} />
        </S.MltContainer>
    )
}

export default MainListItem