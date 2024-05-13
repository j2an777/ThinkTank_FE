import { useModalContext } from '@/contexts/ModalContext';
import { CodeBox } from '@/components/post';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon, StyledButton } from '@/components/shared';

import * as S from './styles';
import { postFormStore } from '@/stores/post';
import { submitProblem } from '@/apis/post';
import useGetPost from '@/hooks/post/useGetPost';

const DetailRight = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();
  const postForm = postFormStore((state) => state.postForm);
  const { postId } = useParams();
  const {
    data: { answer, language },
  } = useGetPost();

  const handleSubmit = () => {
    const access = localStorage.getItem('access');
    if (access) {
      submitProblem(
        { answer: postForm.answer, language: postForm.language },
        postId as string,
      );
    } else {
      open({
        title: '로그인이 필요한 서비스입니다.',
        onButtonClick: () => navigate('/login'),
        buttonLabel: '로그인하기',
      });
    }
  };
  return (
    <S.Container>
      <Icon value="cancel" css={S.IconCss} onClick={() => navigate(-1)} />
      <CodeBox />
      <S.ButtonBox>
        <div>
          <button
            onClick={() =>
              open({
                title: '게시글 작성을 그만두시겠습니까?',
                onButtonClick: () => {},
                hasCancelButton: true,
                buttonLabel: '뒤로가기',
                type: 'comment',
              })
            }
          >
            댓글
          </button>
        </div>
        <Icon
          value="question"
          {...{ css: S.questionCss }}
          onClick={() =>
            open({
              title: '정답 코드',
              onButtonClick: () => {},
              type: 'question',
              answer,
              language,
            })
          }
        />
        <StyledButton onClick={handleSubmit} css={S.testButton}>
          Submit
        </StyledButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default DetailRight;
