import { CategoryValues } from '@/consts/category';
import { LanguageValues } from '@/consts/language';
import { User } from '.';

export interface Page {
  pageIndex: number;
  isDone: boolean;
}

export interface ArticleType {
  postId: number;
  postNumber: number;
  title: string;
  category: string;
  createdAt: string;
  content: string;
  commentCount: number;
  likeCount: number;
  answerCount: number;
  likeType: boolean;
  user: Pick<User, 'email' | 'nickname' | 'profileImage'>;
  pageInfo: Page;
}

export interface ArticleDetail {
  postNumber: number;
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
