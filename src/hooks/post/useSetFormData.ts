import { postFormStore } from '@/stores/post';
import { ArticleDetail } from '@/types';
import { ArticleDetail } from '@/types';
import { ChangeEvent } from 'react';

const useSetFormData = () => {
  const postForm = postFormStore((state) => state.postForm);
  const updatePostForm = postFormStore((state) => state.updatePostForm);
  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    const newValue = { ...postForm, [name]: value };
    updatePostForm(newValue);
  };
  return { postForm, onChange, updatePostForm } as {
    postForm: ArticleDetail;
    onChange: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => void;
    updatePostForm: (value: Partial<ArticleDetail>) => void;
  };
};

export default useSetFormData;
