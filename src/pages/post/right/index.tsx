import * as S from './styles';
import { useModalContext } from '../../../contexts/ModalContext';

const PostRight = () => {
  const { open } = useModalContext();
  return (
    <S.Container>
      <button
        onClick={() =>
          open({
            title: '게시글을 올리겠습니까?',
            onButtonClick: () => console.log('hi'),
            hasCancelButton: true,
            buttonLabel: '확인',
          })
        }
      >
        post
      </button>
    </S.Container>
  );
};

export default PostRight;
