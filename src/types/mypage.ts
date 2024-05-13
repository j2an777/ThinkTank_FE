export interface MypagePosts {
  pageIndex: number;
  done: boolean;
  value: 'created' | 'liked' | 'solved';
  userNickname: string | null;
  loginUserId: string | null;
}
