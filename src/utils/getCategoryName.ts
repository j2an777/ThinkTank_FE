import { CATEGORY, CategoryValues } from '@/consts/category';

const getCategoryName = (category: CategoryValues) => {
  const selectedItem = CATEGORY.find(({ value }) => value === category);
  return selectedItem ? selectedItem.name : 'not defined';
};

export default getCategoryName;
