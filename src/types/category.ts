import { TIdea } from './idea';

export type TCategory = {
  id: string;
  name: string;
  description?: string;
  ideas?: TIdea[];
  createdAt: Date;
  updatedAt: Date;
};
