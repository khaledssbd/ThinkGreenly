import { TCategory } from './category';
import { TUser } from './user';
import { TComment } from './comment';
import { TPayment } from './payment';
import { TVote } from './vote';

export type TIdea = {
  id: string;
  title: string;
  problemStatement: string;
  solution: string;
  description: string;
  images: string[]; // Array of image URLs
  isPaid: boolean;
  price: number; // Only present if isPaid is true
  status: IdeaStatus;
  feedback?: string; // Rejection reason from admin
  categoryId: string;
  authorId: string;
  category: TCategory;
  author: TUser;
  votes: TVote[];
  comments: TComment[];
  payments: TPayment[];
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

// Enums
enum IdeaStatus {
  DRAFT = 'DRAFT',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}
