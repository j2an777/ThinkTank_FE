import { useInfiniteQuery } from '@tanstack/react-query';
import * as S from './styles.ts';
import { getMypageArticles } from '@/apis/mypage.ts';
import { useNickname } from '@/stores/mypage';
import { useEffect, useRef } from 'react';
import { ArticleItem } from '@/types/article.ts';

const CreatedMenu = () => {
  const loginUserId = localStorage.getItem('userId');
  const email = useNickname();
  const loader = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['created', email, loginUserId],
    queryFn: ({ pageParam }) =>
      getMypageArticles({
        pageIndex: pageParam,
        isDone: false,
        value: 'created',
        email: email,
        loginUserId: loginUserId,
      }),
    initialPageParam: 1,
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
      {data?.pages.map((page) =>
        page.data.map((post: ArticleItem) => (
          <div key={post.postId}>{/* 게시글 공통 컴포넌트로 표시 */}</div>
        )),
      )}
      <div ref={loader} style={{ height: '100px' }} />
    </S.Container>
  );
};

export default CreatedMenu;
