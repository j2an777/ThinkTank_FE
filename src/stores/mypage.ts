import { create } from 'zustand';

<<<<<<< HEAD
// 이거는 삭제될 것 같음
interface nickname {
  nickname: string | null;
  setnickname: (nickname: string | null) => void;
}

export const usenickname = create<nickname>((set) => ({
  nickname: null,
  setnickname: (nickname) => set({ nickname: nickname }),
=======
interface Email {
  email: string;
  setEmail: (email: string) => void;
}

export const useEmail = create<Email>((set) => ({
  email: '',
  setEmail: (email) => set({ email: email }),
>>>>>>> origin/dev
}));
