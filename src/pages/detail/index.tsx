import DetailLeft from './left';
import DetailRight from './right';
import * as S from './styles';

const DetailPage = () => {
  return (
    <S.Container>
      <DetailLeft />
      <DetailRight />
    </S.Container>
  );
};

export default DetailPage;
