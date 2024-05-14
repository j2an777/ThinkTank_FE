export interface MypageArticles {
  page: number;
  size: number;
  value: 'created' | 'liked' | 'solved';
  email: string;
}
