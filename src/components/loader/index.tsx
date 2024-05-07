import SkeletonBox from './skeleton';
import * as S from './styles';

const Loading = () => {
  return (
    <S.LoadContainer>
      {[...Array(2)].map((_, index) => (
        <SkeletonBox key={index} />
      ))}
    </S.LoadContainer>
  )
}

export default Loading;