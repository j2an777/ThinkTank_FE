import { getArticles } from '@/apis/post';
import { ArticleList } from '@/types';
import { QueryFunctionContext, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useGetPosts = () => {
  const { ref, inView } = useInView();

  const { 
    data, 
    fetchNextPage, 
    isFetchingNextPage 
  } = useSuspenseInfiniteQuery<ArticleList, Error>({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 0 }: QueryFunctionContext) => {
      // pageParam 타입 검증
      const pageNumber = typeof pageParam === 'number' ? pageParam : 0;
      return getArticles({ pageParam: pageNumber, size: 10 });
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo && !lastPage.pageInfo.isDone) {
        return lastPage.pageInfo.pageIndex + 1;
      }
      return undefined;
    },
    initialPageParam: 0,
    staleTime: 60 * 1_000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      return {
        pages: data.pages.map(page => ({
          ...page,
          posts: page.posts.map(post => ({
            ...post,
          }))
        })),
        pageParams: data.pageParams // 이전 페이지 파라미터를 유지
      };
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return { data, ref, isFetchingNextPage };
};

export default useGetPosts;
