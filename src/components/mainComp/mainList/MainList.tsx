import { MlContainer, MlData, MlDataWrap, MlInfo, MlItemBox, MlProfile, MlUserBlock } from "./MainListStyles";
import Profile from '../../../assets/images/shared/user.svg';
import Like from '../../../assets/images/shared/nolike.svg';
import Comment from '../../../assets/images/shared/comment.svg';
import Check from '../../../assets/images/shared/check.svg';
import { listData } from "./mainListData";
import { ArContent, ArTitle, ArticleBlock } from "../../shared/Article";

const MainList = () => {
  return (
    <MlContainer>
      {listData.map((item, index) => (
        <MlItemBox key={index}>
          <MlUserBlock>
            <MlProfile src={Profile}/>
            <MlInfo>
              <h3>{item.nickname}</h3>
              <p>{item.createdAt}</p>
            </MlInfo>
          </MlUserBlock>
          <ArticleBlock>
            <ArTitle>{item.title}</ArTitle>
            <ArContent dangerouslySetInnerHTML={ item.content } />
            <MlData>
              <MlDataWrap>
                <img src={Like} />
                <p>{item.like}</p>
              </MlDataWrap>
              <MlDataWrap>
                <img src={Comment} />
                <p>{item.comment}</p>
              </MlDataWrap>
              <MlDataWrap>
                <img src={Check} />
                <p>{item.check}</p>
              </MlDataWrap>
            </MlData>
          </ArticleBlock>
        </MlItemBox>
      ))}
    </MlContainer>
  )
}

export default MainList;