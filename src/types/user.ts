export interface IUser {
  email: string;
  role: "MEMBER" | "ADMIN";
  iat?: number;
  exp?: number;
}
