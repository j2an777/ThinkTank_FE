import { getComments } from '@/apis/comment';
import { useInfiniteQuery } from '@tanstack/react-query';

const useGetComments = (postId: string) => {
  return useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: () => getComments(postId as string),
    initialPageParam: 0,
    getNextPageParam: (lastPageParam) => lastPageParam + 1,
    getPreviousPageParam: (lastPageParam) => lastPageParam - 1,
    select: (data) => data.pages.flat()[0],
    staleTime: 60 * 1_000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetComments;
