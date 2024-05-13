import { User } from './auth';

export interface CommentDate {
  postId: number;
  comments: Comment[];
  pageInfo: Page;
}

export interface Comment {
  commentId: number;
  content: string;
  createdAt: Date;
  user: User;
}

export interface Page {
  pageIndex: number;
  isDone: true;
}
