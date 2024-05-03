export type SignUp = {
  email: string;
  nickname: string;
  password: string;
  checkPassword: string;
};

export interface User {
  nickName: string;
  profileImage: string | null;
}
