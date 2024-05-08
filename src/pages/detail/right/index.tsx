import { useModalContext } from '@/contexts/ModalContext';
import { CodeBox } from '@/components/post';
import { useNavigate } from 'react-router-dom';
import { Icon, StyledButton } from '@/components/shared';

import * as S from './styles';

const DetailRight = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();
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
                onButtonClick: () => navigate(-1),
                hasCancelButton: true,
                buttonLabel: '뒤로가기',
                type: 'comment',
              })
            }
          >
            댓글
          </button>
        </div>
        <Icon value="question" {...{ css: S.questionCss }} />
        <StyledButton onClick={() => console.log('제출하기')} css={S.testButton}>
          Submit
        </StyledButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default DetailRight;
