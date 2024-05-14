import { useInfiniteQuery } from '@tanstack/react-query';
import * as S from '../articles/styles';
import { getMypageArticles } from '@/apis/mypage';
import { useEmail } from '@/stores/mypage';
import { useEffect, useRef } from 'react';
import { ArticleType, MypageArticles } from '@/types';
import SkeletonBox from '@/components/loader/skeleton';

const SolvedMenu = ({ value }: Pick<MypageArticles, 'value'>) => {
  const { email } = useEmail();
  const loader = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [value, email],
    queryFn: ({ pageParam }) =>
      getMypageArticles({
        page: pageParam,
        size: 10,
        value: value,
        email: email,
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
      {isFetchingNextPage ? (
        <SkeletonBox />
      ) : (
        data?.pages.map((page) =>
          page.data.map((post: ArticleType) => (
            <div key={post.postId}>{/* solved list component */}</div>
          )),
        )
      )}
      <div ref={loader} style={{ height: '100px' }} />
    </S.Container>
  );
};

export default SolvedMenu;
