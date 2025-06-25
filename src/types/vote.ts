import { TIdea } from './idea';
import { TUser } from './user';

export type TVote = {
  id: string;
  value: number;
  userEmail: string;
  ideaId: string;
  type: 'UP' | 'DOWN';
  user: TUser;
  idea: TIdea;
  createdAt: Date;
};
