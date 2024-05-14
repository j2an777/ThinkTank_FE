import { useInfiniteQuery } from '@tanstack/react-query';
import * as S from './styles';
import { useEmail } from '@/stores/mypage';
import { useEffect, useRef } from 'react';
import { getMypageArticles } from '@/apis/mypage';
import { MypageArticles } from '@/types/mypage';
import { ArticleType } from '@/types/article';
import SkeletonBox from '@/components/loader/skeleton';
import Article from '@/components/shared/article';

const ArticlesMenu = ({ value }: Pick<MypageArticles, 'value'>) => {
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
            <div key={post.postId}>
              <Article article={post} statusFlag="open" />
            </div>
          )),
        )
      )}
      <div ref={loader} style={{ height: '100px' }} />
    </S.Container>
  );
};

export default ArticlesMenu;
