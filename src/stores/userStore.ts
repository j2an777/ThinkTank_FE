import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserState {
  isLoggedIn: boolean;
  nickname: string | null;
  email: string | null;
  profileImage: string | null;
  github: string | null;
  blog: string | null;
  introduce: string | null;
  login: (
    nickname: string,
    email: string,
    profileImage: string,
    github: string,
    blog: string,
    introduce: string,
  ) => void;
  logout: () => void;
}

// localStorage에 유저 정보 저장
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      nickname: null,
      email: null,
      profileImage: null,
      github: null,
      blog: null,
      introduce: null,
      login: (nickname, email, profileImage, github, blog, introduce) =>
        set({ isLoggedIn: true, nickname, email, profileImage, github, blog, introduce }),
      logout: () =>
        set({
          isLoggedIn: false,
          nickname: null,
          email: null,
          profileImage: null,
          github: null,
          blog: null,
          introduce: null,
        }),
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
