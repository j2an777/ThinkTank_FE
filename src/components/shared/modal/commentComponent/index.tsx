import { TextareaField } from '@/components/post';
import { Icon } from '../..';
import { CommentList } from '@/components/detail';
import { useState } from 'react';
import useGetComments from '@/hooks/detail/useGetComments';

import * as S from './styles';

interface AlertComponentProps {
  onButtonClick: () => void;
}

const CommentComponent = ({ onButtonClick }: AlertComponentProps) => {
  const { data } = useGetComments();

  const [comment, setComment] = useState<string>('');
  return (
    <S.Container>
      <Icon value="cancel" onClick={onButtonClick} />
      <CommentList />
      <div>
        <TextareaField
          label="Comment"
          name="comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button onClick={() => console.log(comment)}>등록</button>
      </div>
    </S.Container>
  );
};

export default CommentComponent;
