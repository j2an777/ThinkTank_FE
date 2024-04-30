import { PostForm } from '@/types/post';
import { create } from 'zustand';

interface PostFormState {
  postForm: PostForm | object;
  updatePostForm: (value: Partial<PostForm>) => void;
}
const defaultPostForm = {
  category: '',
  title: '',
  content: '',
  condition: '',
  testCase: [],
};
export const postFormStore = create<PostFormState>((set) => ({
  postForm: defaultPostForm,
  updatePostForm: (value) =>
    set(({ postForm }) => ({ postForm: { ...postForm, ...value } })),
}));
