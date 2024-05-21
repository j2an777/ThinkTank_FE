import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLike } from '@/apis/like';

export const useLike = (
  postId: number,
  initialLikeCount: number,
  initialLikeType: boolean,
) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => postLike(postId),
    onMutate: async () => {
      const newLikeType = !initialLikeType;
      const newLikeCount = newLikeType ? initialLikeCount + 1 : initialLikeCount - 1;

      // 낙관적 업데이트
      queryClient.setQueryData(['likes', postId], {
        likeCount: newLikeCount,
        likeType: newLikeType,
      });

      return { previousLikeType: initialLikeType, previousLikeCount: initialLikeCount };
    },
    onError: (_error, _, context) => {
      if (context) {
        // 에러 발생 시 이전 상태로 되돌리기
        queryClient.setQueryData(['likes', postId], {
          likeCount: context.previousLikeCount,
          likeType: context.previousLikeType,
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });

  const toggleLike = useCallback(() => {
    if (typeof postId !== 'number') {
      return;
    }
    mutation.mutate();
  }, [mutation, postId]);

  const currentLikeData = queryClient.getQueryData<{
    likeCount: number;
    likeType: boolean;
  }>(['likes', postId]);

  return {
    likeCount: currentLikeData?.likeCount ?? initialLikeCount,
    likeType: currentLikeData?.likeType ?? initialLikeType,
    toggleLike,
  };
};
