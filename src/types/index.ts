
export * from "./user";
export type TIdea = {
  id: string;
  title: string;
  problemStatement: string;
  solution: string;
  description: string;
  images: string[];
  isPaid: boolean;
  price: number;
  status: "UNDER_REVIEW" | "APPROVED" | "REJECTED" | "DRAFT";
  feedback: string | null;
  categoryId: string;
  authorId: string;
  category: category;
  author: author;
  votes?: vote[];
  comments?: comment[];
  payments?: payment[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

type comment = {
   id   :     string
  content:   string
  ideaId :   string
  userId :   string
  parentId?  :string
  idea     : TIdea
  user    :  TUser   
  parent?:    comment 
  replies :  comment[] 
  createdAt : string
  updatedAt :string

}

type payment = {
  id         :     string
  userId      :    string
  ideaId       :   string
  user          :  TUser  
  idea           : TIdea  
  amount     :     number
  status      :    "Pending" | "Paid" |"Failed"
  transactionId:   string
  gatewayResponse?: any
  createdAt      : string

}
type vote = {
  id  : string 
  userId: string
  ideaId: string
  type  : "UP" | "DOWN"
  user  : TUser     
  idea  : TIdea     
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

export type category = {
  id: string;
  name: string;
  createdAt: string;
};

// Define types for the nested objects
type Payment = {
  id: string;
  userId: string;
  ideaId: string;
  amount: number;
  status: string;
  transactionId: string;
  gatewayResponse: any;
  createdAt: string;
};

type Idea = {
  id: string;
  title: string;
  problemStatement: string;
  solution: string;
  description: string;
  images: string[];
  isPaid: boolean;
  price: number;
  status: string;
  feedback: string | null;
  categoryId: string;
  authorId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

// Define the User type
export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordChangedAt: string | null;
  image: string | null;
  role: "MEMBER" | "ADMIN";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  votes: any[];
  payments: Payment[];
  comments: any[];
  ideas: Idea[];
};
