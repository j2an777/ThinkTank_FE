import * as S from './styles';
import MainListItem from "./MainListItem";
import { listData } from './mainListData';
import { useEffect, useState } from 'react';
import { ArticleItem } from '@/types/article';

const MainList = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [pageInfo, setPageInfo] = useState<{ pageIndex: number; done: boolean }>();

  useEffect(() => {
      // 실제 데이터 요청 구문으로 바꿔야함.
      const posts = listData[0].posts;
      const pageInfo = listData[1]?.pageInfo;

      if (posts) {
        setArticles(posts);
      }
      if (pageInfo) {
        setPageInfo(pageInfo);
      }
  }, []);

  return (
    <S.MlContainer>
      {articles.map((item) => (
        <MainListItem key={item.postId} listItem={item} />
      ))}
    </S.MlContainer>
  )
}

export default MainList;