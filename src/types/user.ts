export interface IUser {
    name: string;
    email: string;
    role: "MEMBER" | "ADMIN";
    iat?: number;
    exp?: number;
}
