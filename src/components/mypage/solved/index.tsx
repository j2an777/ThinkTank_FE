import { useInfiniteQuery } from '@tanstack/react-query';
import * as S from '../articles/styles';
import { getMypageArticles } from '@/apis/mypage';
import { useEffect, useRef } from 'react';
import { MypageArticles, SolvedArticles } from '@/types';
import SkeletonBox from '@/components/loader/skeleton';
import SolvedBox from './SolvedBox';

const SolvedMenu = ({ value }: Pick<MypageArticles, 'value'>) => {
  const queryEmail = new URLSearchParams(location.search).get('user');
  const loader = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: [value, queryEmail],
      queryFn: ({ pageParam }) =>
        getMypageArticles({
          page: pageParam,
          size: 10,
          value: value,
          email: queryEmail,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      staleTime: 1000 * 60 * 5, // 5분
    });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 },
    );
    if (loader.current) {
      io.observe(loader.current);
    }
    return () => io.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <S.Container>
      {isLoading ? (
        <SkeletonBox />
      ) : (
        data?.pages.map((page) =>
          page.posts.map((post: SolvedArticles) => (
            <div key={post.postId}>
              <SolvedBox data={post} />
            </div>
          )),
        )
      )}
      <div ref={loader} style={{ height: '100px' }} />
    </S.Container>
  );
};

export default SolvedMenu;
