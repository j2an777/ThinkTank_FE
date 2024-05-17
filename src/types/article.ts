import { CategoryValues } from '@/consts/category';
import { LanguageValues } from '@/consts/language';
import { User } from '.';

// 스크롤 페이지 정보
export interface Page {
  pageIndex: number;
  isDone: boolean;
}

// 게시글 정보 (유저, 게시글, 페이지)
export interface ArticleType {
  postId: number;
  postNumber: number;
  title: string;
  category: string;
  createdAt: Date;
  content: string;
  commentCount: number;
  likeCount: number;
  codeCount: number;
  likeType: boolean;
  user: Pick<User, 'email' | 'nickname' | 'profileImage'>;
}

export interface ArticleList {
  posts: ArticleType[];
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
  code: string;
  commentCount: number;
  likeCount: number;
  answerCount: number;
  likeType: boolean;
}

export interface TestCase {
  example: string;
  result: string;
}
export interface ArticleList {
  posts: ArticleType[];
  pageInfo: Page;
}
