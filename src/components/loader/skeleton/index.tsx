import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './styles';

const SkeletonBox = () => {
  return (
    <>
        <S.UserBox>
            <S.AvatarBlock>
              <Skeleton circle={true} height={70} width={70}/>
            </S.AvatarBlock>
            <S.InfoBlock>
              <h3><Skeleton width={50} /></h3>
              <p><Skeleton width={100} /></p>
            </S.InfoBlock>
        </S.UserBox>
        <S.ContentBox>
            <Skeleton width={600} height={300} borderRadius={20}/>
        </S.ContentBox>
    </>
  )
}

export default SkeletonBox;