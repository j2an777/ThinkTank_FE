import { MlArticle, MlContent, MlData, MlDataBox, MlInfo, MlItemBox, MlProfile, MlTitle, MlUser, MlWrapper } from "./MainListStyles";
import Profile from '../../../assets/images/shared/user.svg';
import Like from '../../../assets/images/shared/nolike.svg';
import Comment from '../../../assets/images/shared/comment.svg';
import Check from '../../../assets/images/shared/check.svg';
import { ListData } from "./MainListData";

const MainList = () => {
  return (
    <MlWrapper>
      {ListData.map((item, index) => (
        <MlItemBox key={index}>
          <MlUser>
            <MlProfile src={Profile}/>
            <MlInfo>
              <h3>{item.nickname}</h3>
              <p>{item.createdAt}</p>
            </MlInfo>
          </MlUser>
          <MlArticle>
            <MlTitle>{item.title}</MlTitle>
            <MlContent dangerouslySetInnerHTML={ item.content } />
            <MlData>
              <MlDataBox>
                <img src={Like} />
                <p>{item.like}</p>
              </MlDataBox>
              <MlDataBox>
                <img src={Comment} />
                <p>{item.comment}</p>
              </MlDataBox>
              <MlDataBox>
                <img src={Check} />
                <p>{item.check}</p>
              </MlDataBox>
            </MlData>
          </MlArticle>
        </MlItemBox>
      ))}
    </MlWrapper>
  )
}

export default MainList;