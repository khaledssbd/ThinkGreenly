import { TIdea } from './idea';
import { TVote } from './vote';
import { TPayment } from './payment';

export type AuthUser = {
  name: string;
  email: string;
  image: string;
  role: 'MEMBER' | 'ADMIN';
  iat?: number;
  exp?: number;
};


export type TUser = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  role: 'MEMBER' | 'ADMIN';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  ideas?: TIdea[];
  votes?: TVote[];
  comments?: Comment[];
  payments?: TPayment[];
};
