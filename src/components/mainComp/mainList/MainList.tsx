import * as S from './styles';
import MainListItem from "./MainListItem";
import { fetchPosts } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { ArticleItem } from '@/types/article';

const MainList = () => {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>
  }

  return (
    <S.MlContainer>
      {isSuccess && data.posts.map((item: ArticleItem) => (
        <MainListItem key={item.postId} listItem={item} />
      ))}
    </S.MlContainer>
  );
};

export default MainList;
