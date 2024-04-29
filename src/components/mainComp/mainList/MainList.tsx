import { listData } from "./mainListData";

import * as S from './styles';
import MainListItem from "./MainListItem";

const MainList = () => {
  return (
    <S.MlContainer>
      {listData.map((item, index) => (
        <MainListItem key={index} listItem={item} />
      ))}
    </S.MlContainer>
  )
}

export default MainList;