export interface SignUp {
  email: string;
  nickname: string;
  password: string;
  checkPassword: string;
  github?: string;
  blog?: string;
  introduce?: string;
  profileImage: null | string;
}

export interface Login {
  email: string;
  password: string;
}

export interface User {
  email: string;
  nickname: string;
  github?: string;
  blog?: string;
  introduce?: string;
  profileImage: string;
}

export interface UserModify {
  nickname: string;
  github?: string;
  blog?: string;
  introduce?: string;
  profileImage: null | string;
}
