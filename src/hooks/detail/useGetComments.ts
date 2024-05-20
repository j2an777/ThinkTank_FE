import { getComments } from '@/apis/comment';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useGetComments = (postId: string) => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['comments', postId],
    queryFn: () => getComments(postId as string),
    initialPageParam: 0,
    getNextPageParam: (lastPageParam) => lastPageParam.length,
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages.flat()[0],
    }),
    staleTime: 60 * 1_000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return { data, ref };
};

export default useGetComments;
