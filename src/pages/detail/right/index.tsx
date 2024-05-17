import { postFormStore } from '@/stores/post';
import { postCheck } from '@/apis/article';
import useGetPost from '@/hooks/post/useGetPost';
import { useModalContext } from '@/contexts/ModalContext';
import { CodeBox } from '@/components/post';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon, StyledButton } from '@/components/shared';
import InfoStatus from '@/components/shared/infoStatus';

import * as S from './styles';
import { layoutMap } from '@/styles/layout';
import { getAccess } from '@/hooks/auth/useLocalStorage';

const DetailRight = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();
  const { postId } = useParams();
  const postForm = postFormStore((state) => state.postForm);
  const {
    data: { code, language, commentCount },
  } = useGetPost();

  const handleSubmit = () => {
    const access = getAccess();
    if (access) {
      postCheck({ code: postForm.code, language: postForm.language }, postId as string);
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
        <Icon
          value="question"
          css={layoutMap.borderCircleIcon}
          onClick={() =>
            open({
              title: '정답 코드',
              onButtonClick: () => {},
              type: 'question',
              code,
              language,
            })
          }
          size={32}
        />
        <StyledButton onClick={handleSubmit} css={S.testButton}>
          Submit
        </StyledButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default DetailRight;
