import * as S from './styles';
import MainListItem from "./MainListItem";
import { listData } from './mainListData';
import { useEffect, useState } from 'react';
import { ArticleItem } from '@/types/article';

const MainList = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [pageInfo, setPageInfo] = useState<{ pageIndex: number; done: boolean }>();

  useEffect(() => {
      // listData가 아닌 실제 데이터 요청 받은 객체로 해야함.
      // const fetchData = async () => {
      // const accessToken = localStorage.getItem('accessToken')
      //
      // try {
      //   const response = await axios.get('/api/posts', {
      //     headers: {
      //       Authorization: `Bearer as ${accessToken}`,
      //     }
      //   });
      const posts = listData[0].posts;
      const pageInfo = listData[1]?.pageInfo;

      if (posts) {
        setArticles(posts);
      }
      if (pageInfo) {
        setPageInfo(pageInfo);
      }
      //   setArticles(response.data.posts);
      // } catch (error) {
      //   console.error(error);
      // }
      //   };
      // fetchData();
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