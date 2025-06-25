import { TIdea } from './idea';
import { TUser } from './user';

export type TComment = {
  id: string;
  content: string;
  ideaId: string;
  userId: string;
  parentId?: string;
  idea: TIdea;
  user: TUser;
  parent?: TComment;
  replies?: TComment[];
  createdAt: string;
  updatedAt: string;
};
