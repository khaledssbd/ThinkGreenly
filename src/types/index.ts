export * from "./user";
export type TIdea = {
  id: string
  title: string
  problemStatement: string
  solution: string
  description: string
  images: string[]
  isPaid: boolean
  price: number
  status: "UNDER_REVIEW" | "APPROVED" | "REJECTED" | "DRAFT" 
  feedback: string | null
  categoryId: string
  authorId:string
  category: category
  author: author
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}

type author = {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordChangedAt: any;
  image: string | null;
  role: "MEMBER" | "ADMIN";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

type category = {
  id: string;
  name: string;
  createdAt: string;
};


// Define types for the nested objects
type Payment = {
  id: string
  userId: string
  ideaId: string
  amount: number
  status: string
  transactionId: string
  gatewayResponse: any
  createdAt: string
}

type Idea = {
  id: string
  title: string
  problemStatement: string
  solution: string
  description: string
  images: string[]
  isPaid: boolean
  price: number
  status: string
  feedback: string | null
  categoryId: string
  authorId: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}

// Define the User type
export type TUser = {
  id: string
  name: string
  email: string
  password: string
  passwordChangedAt: string | null
  image: string | null
  role: "MEMBER" | "ADMIN"
  isActive: boolean
  createdAt: string
  updatedAt: string
  votes: any[]
  payments: Payment[]
  comments: any[]
  ideas: Idea[]
}