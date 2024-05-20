import { postFormStore } from '@/stores/post';
import { postCheck } from '@/apis/article';
import useGetPost from '@/hooks/post/useGetPost';
import { useModalContext } from '@/contexts/ModalContext';
import { CodeBox } from '@/components/post';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledButton } from '@/components/shared';
import InfoStatus from '@/components/shared/infoStatus';
import { getAccess } from '@/hooks/auth/useLocalStorage';
import withSuspense from '@/hooks/withSuspense';

import * as S from './styles';
import { useState } from 'react';

const DetailRight = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { code, language } = postFormStore((state) => state.postForm);
  const {
    data: { commentCount, code: answer, language: answerAnswer },
  } = useGetPost();

  const handleSubmit = async () => {
    setIsLoading(true);
    const access = getAccess();
    if (access && postId) {
      await postCheck({ code, language, postId }).then(() =>
        open({
          title: '정답입니다',
          onButtonClick: () => {},
          buttonLabel: '확인',
        }),
      );
    } else {
      open({
        onButtonClick: () => navigate('/login'),
        title: '로그인 페이지 이동',
        description: '로그인 후 이용 가능한 서비스입니다.',
        type: 'alert',
        buttonLabel: '이동',
        hasCancelButton: true,
      });
    }
    setIsLoading(false);
  };
  return (
    <S.Container>
      <S.CancelIcon value="cancel" onClick={() => navigate(-1)} />
      <CodeBox />
      <S.ButtonBox>
        <InfoStatus
          value="comment"
          count={commentCount}
          onClick={() =>
            open({
              title: '게시글 작성을 그만두시겠습니까?',
              onButtonClick: () => {},
              hasCancelButton: true,
              buttonLabel: '뒤로가기',
              type: 'comment',
            })
          }
        />
        <S.QuestionIcon
          value="question"
          onClick={() =>
            open({
              title: '정답 코드',
              onButtonClick: () => {},
              type: 'question',
              code: answer,
              language: answerAnswer,
            })
          }
          size={32}
        />
        <StyledButton onClick={handleSubmit} disabled={isLoading} size="large">
          Submit
        </StyledButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default withSuspense(DetailRight, { fallback: <>suspense</> });
