import { TextareaField } from '@/components/post';
import { Icon, StyledButton } from '../..';
import { CommentList } from '@/components/detail';
import { useState } from 'react';
import { postComment } from '@/apis/comment';
import { postIdStore } from '@/stores/post';
import { animationMap } from '@/styles/framerMotion';

import * as S from './styles';

interface AlertComponentProps {
  onButtonClick: () => void;
  open: boolean;
}

const CommentComponent = ({ onButtonClick, open }: AlertComponentProps) => {
  const [comment, setComment] = useState<string>('');
  const postId = postIdStore((state) => state.postId);
  return (
    <S.Container
      variants={animationMap.commetnContainerAnimation}
      initial="close"
      animate={open ? 'open' : 'close'}
      exit="close"
    >
      <Icon value="cancel" onClick={onButtonClick} />
      <CommentList />
      <S.InputBox>
        <TextareaField
          label="Comment"
          name="comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <StyledButton
          width="100px"
          size="small"
          onClick={() => postComment(comment, postId)}
        >
          등록
        </StyledButton>
      </S.InputBox>
    </S.Container>
  );
};

export default CommentComponent;
