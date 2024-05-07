import { TextareaField } from '@/components/post';
import { Icon } from '../..';
import { useState } from 'react';
import { CommentItem } from '@/components/detail';
import { Comment } from '@/types/comment';

import * as S from './styles';

interface AlertComponentProps {
  onButtonClick: () => void;
  close?: () => void;
}

const defaultComment = {
  commentId: 1,
  createdAt: new Date('2024-05-02'),
  content:
    'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
  user: {
    nickname: '아브라카타브라마이마이마이',
    profileImage: null,
  },
} as Comment;

const CommentComponent = ({ onButtonClick, close }: AlertComponentProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <S.Container>
      <Icon value="cancel" onClick={close} />
      <div>
        <CommentItem {...defaultComment} />
      </div>
      <div>
        <TextareaField
          label="Comment"
          name="comment"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={onButtonClick}>등록</button>
      </div>
    </S.Container>
  );
};

export default CommentComponent;
