import { ArticleDetail } from '@/types';
import { create } from 'zustand';

interface PostFormState {
  postForm: Omit<ArticleDetail, 'postNumber'>;
  updatePostForm: (value: Partial<ArticleDetail>) => void;
}
const defaultPostForm = {
  category: '',
  title: '',
  content: '',
  condition: '',
  testCases: [],
  language: 'java',
  answer: '',
};
export const postFormStore = create<PostFormState>((set) => ({
  postForm: defaultPostForm,
  updatePostForm: (value) =>
    set(({ postForm }) => ({ postForm: { ...postForm, ...value } })),
}));

interface PostIdState {
  postId: string;
  updatePostId: (value: string) => void;
}

export const postIdStore = create<PostIdState>((set) => ({
  postId: '',
  updatePostId: (value) => set(() => ({ postId: value })),
}));
