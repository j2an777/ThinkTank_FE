import { useInfiniteQuery } from '@tanstack/react-query';
import * as S from './styles';
import { useEffect, useRef, useState } from 'react';
import { getMypageArticles } from '@/apis/mypage';
import { MypageArticles } from '@/types/mypage';
import { ArticleType } from '@/types/article';
import SkeletonBox from '@/components/loader/skeleton';
import Article from '@/components/shared/article';

const ArticlesMenu = ({ value }: Pick<MypageArticles, 'value'>) => {
  const queryEmail = new URLSearchParams(location.search).get('user');
  const loader = useRef(null);
  const [isOwner, setIsOwner] = useState(false);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
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
    if (location.pathname.includes('mypage')) {
      setIsOwner(true);
    }
    return () => io.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <S.Container>
      {hasNextPage ? (
        <SkeletonBox />
      ) : (
        data?.pages.map((page) =>
          page.posts.map((post: ArticleType) => (
            <S.Block key={post.postId}>
              <Article article={post} statusFlag="open" />
            </S.Block>
          )),
        )
      )}
      <div ref={loader} style={{ height: '100px' }} />
    </S.Container>
  );
};

export default ArticlesMenu;
