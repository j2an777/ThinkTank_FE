import { useModalContext } from '@/contexts/ModalContext';
import { CodeBox } from '@/components/post';
import { useNavigate } from 'react-router-dom';
import { postFormStore } from '@/stores/post';
import { Icon } from '@/components/shared';

import * as S from './styles';

const DetailRight = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();
  const postForm = postFormStore((state) => state.postForm);
  return (
    <S.Container>
      <Icon value="cancel" css={S.IconCss} onClick={() => navigate(-1)} />
      <CodeBox />
      <S.ButtonBox>
        <button>댓글</button>
        <div>
          <Icon value="question" />
        </div>
        <button
          onClick={() =>
            open({
              title: '게시글을 올리겠습니까?',
              onButtonClick: () => console.log(postForm),
              hasCancelButton: true,
              buttonLabel: '확인',
            })
          }
          css={S.testButton}
        >
          Submit
        </button>
      </S.ButtonBox>
    </S.Container>
  );
};

export default DetailRight;
