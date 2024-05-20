// import { postComment } from '@/apis/comment';
// import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useState } from 'react';

// const client = new QueryClient();

// const useMutateComment = (postId: string) => {
//   const queryClient = useQueryClient();
//   const [comment, setComment] = useState<string>('');
//   const addCommentMutation = useMutation({
//     mutationFn: () => postComment(comment, postId),
//     onMutate: async () => {
//       setComment('');
//       await queryClient.cancelQueries({
//         queryKey: ['comments', postId],
//       });
//       const previousComments = queryClient.getQueryData(['comments', postId]);
//       if (previousComments) {
//         queryClient.setQueryData(['comments', postId], {
//           ...previousComments,
//           comments: [...previousComments.comments],
//         });
//       }
//     },
//   });
//   return;
// };

// export default useMutateComment;
