import { create } from 'zustand';

// 이거는 삭제될 것 같음
interface Nickname {
  nickname: string | null;
  setNickname: (nickname: string | null) => void;
}

export const useNickname = create<Nickname>((set) => ({
  nickname: null,
  setNickname: (nickname) => set({ nickname: nickname }),
}));
