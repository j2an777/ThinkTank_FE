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
    getNextPageParam: ({ pageInfo }) => pageInfo.pageIndex + 1,
    select: (data) => ({
      pageParams: data.pages[0].pageInfo,
      pages: data.pages[0].comments,
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
