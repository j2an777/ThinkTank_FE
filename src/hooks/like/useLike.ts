import { updateLike } from "@/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";

type LikeData = {
    likeCount: number;
    likeType: boolean;
};

export const useLike = (postId: number, initialLikeCount: number, initialLikeType: boolean) => {
    const queryClient = useQueryClient();
    const [likeCount, setLikeCount] = useState(initialLikeCount);
    const [likeType, setLikeType] = useState(initialLikeType);
    const [jellyAnimation, setJellyAnimation] = useState(false);

    const { mutate } = useMutation({
        mutationFn: () => updateLike(postId),
        onMutate: async () => {
            await queryClient.cancelQueries({
              queryKey: ['likes', postId]
            });
            const previousLikes = queryClient.getQueryData<LikeData>(['likes', postId]);

            if (previousLikes) {
                const newLikeCount = previousLikes.likeType ? previousLikes.likeCount - 1 : previousLikes.likeCount + 1;
                const newLikeType = !previousLikes.likeType;

                queryClient.setQueryData(['likes', postId], {
                    likeCount: newLikeCount,
                    likeType: newLikeType
                });

                setLikeCount(newLikeCount);
                setLikeType(newLikeType);

                return { previousLikes };
            }
        },
        onError: (error, variables, context) => {
          if (context?.previousLikes) {
            queryClient.setQueryData(['likes', postId], context.previousLikes);
            setLikeCount(context.previousLikes.likeCount);
            setLikeType(context.previousLikes.likeType);
          }
          console.error('Error updating likes:', error);
        },
        onSettled: () => {
          queryClient.invalidateQueries({
            queryKey: ['likes', postId]
          });
        }
    });

    const toggleLike = useCallback(() => {
        setJellyAnimation(true);
        setTimeout(() => setJellyAnimation(false), 100);
        mutate();
    }, [mutate]);

    return { likeCount, likeType, jellyAnimation, toggleLike };
};
