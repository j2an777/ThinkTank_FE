export interface MypagePosts {
  pageIndex: number;
  isDone: boolean;
  value: 'created' | 'liked' | 'solved';
  email: string | null;
  loginUserId: string | null;
}
