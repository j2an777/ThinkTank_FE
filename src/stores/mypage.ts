import { create } from 'zustand';

interface Nickname {
  nickname: string | null;
  setNickname: (nickname: string | null) => void;
}

export const useNickname = create<Nickname>((set) => ({
  nickname: null,
  setNickname: (nickname) => set({ nickname: nickname }),
}));
