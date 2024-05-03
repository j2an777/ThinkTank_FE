import { useState } from 'react';

const useForm = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

export default useForm;
