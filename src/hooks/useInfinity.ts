import { useInfiniteQuery } from '@tanstack/react-query';

export async function fetchInfiniteData(api: string, pageParam = 1) {
  const limit = 10; // 한 번에 불러올 데이터 수
  const response = await fetch(`${api}?page=${pageParam}&limit=${limit}`);
  const data = await response.json();
  // 다음 페이지 계산: 'done'이 false면 다음 페이지 번호, true면 undefined
  const nextPage = data.pageInfo.done ? undefined : pageParam + 1;
  return { data, nextPage };
}

export const useGetInfiniteData = (key: string, api: string) => {
  return useInfiniteQuery({
    queryKey: [key],
    queryFn: ({ pageParam = 1 }) => fetchInfiniteData(api, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
