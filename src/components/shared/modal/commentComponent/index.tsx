import { TextareaField } from '@/components/post';
import { Icon, StyledButton } from '../..';
import { CommentList } from '@/components/detail';
import { useState } from 'react';

import * as S from './styles';
import { postComment } from '@/apis/comment';
import { postIdStore } from '@/stores/post';

interface AlertComponentProps {
  onButtonClick: () => void;
}

const CommentComponent = ({ onButtonClick }: AlertComponentProps) => {
  const [comment, setComment] = useState<string>('');
  const postId = postIdStore((state) => state.postId);
  return (
    <S.Container>
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
