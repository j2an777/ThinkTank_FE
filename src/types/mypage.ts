export interface MypageArticles {
  page: number;
  size: number;
  value: 'created' | 'liked' | 'solved';
  email: string | null;
}

export interface SolvedArticles {
  postId: number;
  postNumber: number;
  language: string;
  title: string;
  code: string;
}
