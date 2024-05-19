import { Text } from '@/components/shared';
import { Comment } from '@/types/comment';
import getTimeDifference from '@/utils/getTimeDifference';
import { ForwardedRef, forwardRef, useState } from 'react';
import UserCircle from '@/components/shared/UserCircle';

import * as S from './styles';
import { animationMap } from '@/styles/framerMotion';
import { AnimatePresence } from 'framer-motion';
import { deleteComment } from '@/apis/comment';
import { postIdStore } from '@/stores/post';
import { useQueryClient } from '@tanstack/react-query';

const CommentItem = forwardRef<HTMLDivElement, Comment>(
  (
    { content, createdAt, user, commentId }: Comment,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [isExpand, setIsExpand] = useState<boolean>(false);
    const postId = postIdStore((state) => state.postId);
    const queryClient = useQueryClient();
    return (
      <S.Container ref={ref}>
        <UserCircle size={56} profileImage={user.profileImage} />
        <S.UserBox>
          <Text typography="t6" ellipsis={100}>
            {user.nickname}
          </Text>
          <Text typography="t6" color="gray300">
            {getTimeDifference(createdAt)}
          </Text>
        </S.UserBox>
        <Text typography="t6" css={S.contentCss}>
          {content}
        </Text>
        <S.ThreedotIcon
          size={38}
          value="threedot"
          onClick={() => setIsExpand((prev) => !prev)}
        />
        <AnimatePresence>
          {isExpand && (
            <S.Test
              variants={animationMap.fadeInOut}
              initial="close"
              animate={isExpand ? 'open' : 'close'}
              exit="close"
            >
              <Text
                typography="t6"
                color="red"
                clickable
                onClick={() =>
                  deleteComment(postId, commentId).then(() => {
                    queryClient.invalidateQueries({ queryKey: ['comments', postId] });
                    setIsExpand(false);
                  })
                }
              >
                삭제
              </Text>
            </S.Test>
          )}
        </AnimatePresence>
      </S.Container>
    );
  },
);

export default CommentItem;
