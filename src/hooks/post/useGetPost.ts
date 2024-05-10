import { getProblem } from '@/apis/post';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useGetPost = () => {
  const { postId } = useParams();
  return useSuspenseQuery({
    queryKey: ['post', postId],
    queryFn: () => getProblem(postId as string),
  });
};

export default useGetPost;
