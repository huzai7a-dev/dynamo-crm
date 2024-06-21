import { IUser } from "../entities/user";

interface LoginResponse {
  message: string;
  token: string;
  profile: Partial<IUser>;
}

interface SignUpResponse {
  message: string;
}
export type { LoginResponse, SignUpResponse };
