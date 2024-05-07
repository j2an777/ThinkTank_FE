import { postFormStore } from '@/stores/post';
import { PostForm } from '@/types/post';
import { ChangeEvent } from 'react';

const useSetFormData = () => {
  const postForm = postFormStore((state) => state.postForm);
  const updatePostForm = postFormStore((state) => state.updatePostForm);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    const newValue = { ...postForm, [name]: value };
    updatePostForm(newValue);
  };
  return { postForm, handleChange, updatePostForm } as {
    postForm: PostForm;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    updatePostForm: (value: Partial<PostForm>) => void;
  };
};

export default useSetFormData;
