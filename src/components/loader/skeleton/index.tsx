import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './styles';

const SkeletonBox = () => {
  return (
    <>
        <S.UserBox>
            <S.AvatarBlock>
              <Skeleton circle={true} height={105} width={105}/>
            </S.AvatarBlock>
            <S.InfoBlock>
              <h3><Skeleton width={100} height={30} borderRadius={10}/></h3>
              <p><Skeleton width={80} height={30} borderRadius={10}/></p>
            </S.InfoBlock>
        </S.UserBox>
        <S.ContentBox>
            <Skeleton width={1100} height={400} borderRadius={20}/>
        </S.ContentBox>
    </>
  )
}

export default SkeletonBox;