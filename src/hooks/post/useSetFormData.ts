import { postFormStore } from '@/stores/post';
import { ArticleDetail } from '@/types';
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
    postForm: ArticleDetail;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    updatePostForm: (value: Partial<ArticleDetail>) => void;
  };
};

export default useSetFormData;
