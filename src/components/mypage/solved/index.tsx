import { useInfiniteQuery } from '@tanstack/react-query';
import * as S from './styles';
import { getMypageArticles } from '@/apis/mypage';
import { useEffect, useRef } from 'react';
import { MypageArticles, SolvedArticles } from '@/types';
import SkeletonBox from '@/components/loader/skeleton';
import { Text } from '@/components/shared';
import { CodeBox } from '@/components/post';

const SolvedMenu = ({ value }: Pick<MypageArticles, 'value'>) => {
  const queryEmail = new URLSearchParams(location.search).get('user');
  const loader = useRef(null);

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
    return () => io.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <S.Container>
      {hasNextPage ? (
        <SkeletonBox />
      ) : (
        data?.pages.map((page) =>
          page.posts.map((post: SolvedArticles) => (
            <S.Block key={post.postId}>
              <Text typography="t1" bold="regular" color="black">
                {post.postNumber}. {post.title}
              </Text>
              <CodeBox
                readOnly
                layout={false}
                code={post.code}
                language={post.language}
              />
            </S.Block>
          )),
        )
      )}
      <div ref={loader} style={{ height: '100px' }} />
    </S.Container>
  );
};

export default SolvedMenu;
