import { useInfiniteQuery } from '@tanstack/react-query';
<<<<<<< HEAD
import * as S from '../created/styles';
import { getMypageArticles } from '@/apis/mypage.ts';
import { useNickname } from '@/stores/mypage.ts';
import { useEffect, useRef } from 'react';
import { ArticleType } from '@/types';
=======
import * as S from '../articles/styles';
import { getMypageArticles } from '@/apis/mypage';
import { useEmail } from '@/stores/mypage';
import { useEffect, useRef } from 'react';
import { ArticleType, MypageArticles } from '@/types';
import SkeletonBox from '@/components/loader/skeleton';
>>>>>>> origin/dev

const SolvedMenu = ({ value }: Pick<MypageArticles, 'value'>) => {
  const { email } = useEmail();
  const loader = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [value, email],
    queryFn: ({ pageParam }) =>
      getMypageArticles({
<<<<<<< HEAD
        pageIndex: pageParam,
        isDone: false,
        value: 'solved',
        email: nickname,
        loginUserId: loginUserId,
=======
        page: pageParam,
        size: 10,
        value: value,
        email: email,
>>>>>>> origin/dev
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
<<<<<<< HEAD
      {data?.pages.map((page) =>
        page.data.map((post: ArticleType) => (
          <div key={post.postId}>{/* 게시글 공통 컴포넌트로 표시 */}</div>
        )),
=======
      {isFetchingNextPage ? (
        <SkeletonBox />
      ) : (
        data?.pages.map((page) =>
          page.data.map((post: ArticleType) => (
            <div key={post.postId}>{/* solved list component */}</div>
          )),
        )
>>>>>>> origin/dev
      )}
      <div ref={loader} style={{ height: '100px' }} />
    </S.Container>
  );
};

export default SolvedMenu;
