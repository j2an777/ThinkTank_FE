import DetailFallback from './DetailFallback';
import withSuspense from '@/hooks/withSuspense';
import useGetPost from '@/hooks/post/useGetPost';
import { DescriptionBox, TestCaseBox } from '@/components/shared';

import * as S from './styles';

const DetailLeft = () => {
  const {
    data: { testCases, ...postForm },
  } = useGetPost();

  return (
    <S.Container>
      <DescriptionBox page="detail" {...postForm} />
      <TestCaseBox testCases={testCases} />
    </S.Container>
  );
};

export default withSuspense(DetailLeft, { fallback: <DetailFallback /> });
