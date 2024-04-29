import * as S from './styles';
import MainListItem from "./MainListItem";
import { useEffect, useState } from "react";
import axios from "axios";

const MainList = () => {
  const [articles, setArticles] = useState([]);

  // 페이지 로드 되면 데이터 조회
  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');

      try {
        const response = await axios.get('/api/posts', {
          headers: {
            Authorization: `Bearer as ${accessToken}`,
          }
        });
        setArticles(response.data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.MlContainer>
      {articles.map((item, index) => (
        <MainListItem key={index} listItem={item} />
      ))}
    </S.MlContainer>
  )
}

export default MainList;