import { getComments } from '@/apis/comment';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useGetComments = () => {
  const { postId } = useParams();
  console.log(postId);
  return useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: () => getComments(postId as string),
    initialPageParam: 0,
    getNextPageParam: (lastPageParam) => lastPageParam + 1,
    getPreviousPageParam: (lastPageParam) => lastPageParam - 1,
  });
};

export default useGetComments;
