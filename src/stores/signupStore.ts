import { postSignup } from '@/apis/AuthAPI';
import { SignUp } from '@/types/auth';
import { create } from 'zustand';

interface SignupStore {
  data: SignUp;
  setRequiredData: (email: string, password: string, nickname: string) => void;
  setOptionalData: (github?: string, blog?: string, introduce?: string) => void;
  submitSignup: () => Promise<void>;
}

export const useSignupStore = create<SignupStore>((set, get) => ({
  data: {
    //초기 데이터
    email: '',
    password: '',
    nickname: '',
  },
  //필수입력사항
  setRequiredData: (email, password, nickname) => {
    console.log('setRequiredData:', { email, password, nickname });
    set((state) => ({ data: { ...state.data, email, password, nickname } }));
  },
  //선택입력사항
  setOptionalData: (github, blog, introduce) => {
    console.log('setOptionalData:', { github, blog, introduce });
    set((state) => ({ data: { ...state.data, github, blog, introduce } }));
  },
  //회원가입 요청
  submitSignup: async () => {
    console.log('submitSignup:', get().data);
    const { data } = get();
    try {
      const response = await postSignup(data);
      console.log('회원가입 성공', response);
    } catch (error) {
      console.error('회원가입 실패', error);
    }
  },
}));
