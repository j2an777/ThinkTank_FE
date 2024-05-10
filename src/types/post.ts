import { CategoryValues } from '@/consts/category';
import { LanguageValues } from '@/consts/language';

export interface PostForm {
  category: CategoryValues;
  title: string;
  content: string;
  condition: string;
  testCases: TestCase[];
  language: LanguageValues;
  answer: string;
}

export interface TestCase {
  example: string;
  result: string;
}
