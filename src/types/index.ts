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
  authorId: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}