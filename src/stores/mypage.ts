import { create } from 'zustand';

interface Email {
  email: string;
  setEmail: (email: string) => void;
}

export const useEmail = create<Email>((set) => ({
  email: '',
  setEmail: (email) => set({ email: email }),
}));
