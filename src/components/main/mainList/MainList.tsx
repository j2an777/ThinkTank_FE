import * as S from './styles';
import { ArticleType } from '@/types/article';
import React from 'react';
import Loading from '@/components/loader';
import useGetPosts from '@/hooks/post/useGetPosts';
import MainListItem from '../mainListItem';

const MainList = () => {
  const { data, ref, isFetchingNextPage } = useGetPosts();

  if (!data || data === undefined) {
    return <div>No data found.</div>;
  }

  return (
    <S.MlContainer>
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.posts.map((item: ArticleType) => (
            <MainListItem key={item.postId} listItem={item} />
          ))}
        </React.Fragment>
      ))}
      <div ref={ref} style={{ width: '100%', height: '20px' }}>
        {isFetchingNextPage && <Loading />}
      </div>
    </S.MlContainer>
  );
};

export default MainList;
