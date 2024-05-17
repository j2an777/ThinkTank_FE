import { SolvedArticles } from '@/types';
import * as S from './styles';

export const SolvedBox = ({ data }: { data: SolvedArticles }) => {
  return (
    <S.Container>
      <div>{data.postId}</div>
      <div>{data.title}</div>
    </S.Container>
  );
};

export default SolvedBox;
