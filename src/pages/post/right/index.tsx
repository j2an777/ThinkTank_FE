import * as S from './styles';
import { useModalContext } from '@/contexts/ModalContext';
import { CodeBox } from '@/components/post';
import { useNavigate } from 'react-router-dom';
import { postFormStore } from '@/stores/post';
import { Icon, StyledButton } from '@/components/shared';

const PostRight = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();
  const postForm = postFormStore((state) => state.postForm);
  return (
    <S.Container>
      <Icon
        value="cancel"
        css={S.IconCss}
        onClick={() =>
          open({
            title: '게시글 작성을 그만두시겠습니까?',
            onButtonClick: () => navigate(-1),
            hasCancelButton: true,
            buttonLabel: '뒤로가기',
          })
        }
      />
      <CodeBox />
      <StyledButton
        onClick={() =>
          open({
            title: '게시글을 올리겠습니까?',
            onButtonClick: () => {
              console.log(postForm);
            },
            hasCancelButton: true,
            buttonLabel: '확인',
          })
        }
        css={S.testButton}
      >
        Post
      </StyledButton>
    </S.Container>
  );
};

export default PostRight;
