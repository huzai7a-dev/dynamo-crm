import { Document, Model } from "mongoose";

interface IUser extends Document {
  user_name: string;
  password: string;
  isAdmin?: boolean;
  primary_email: string;
  secondary_email: string;
  invoice_email: string;
  contact_name: string;
  phone: string;
  cell?: string;
  zip_code?: string;
  country?: string;
  city?: string;
  reference?:
    | "Search Engine"
    | "Sales Manager"
    | "Customer Reference"
    | "Others";
  address?: string;
  website?: string;
  state?: string;
  created_at?: Date;
  updated_at?: Date;
}

interface IUserMethods {
  signJwt(): string;
}

type IUserModel = Model<IUser, {}, IUserMethods>;

interface AuthUserReq {
  _id: string;
  token: string;
}

export type { IUser, IUserModel, IUserMethods, AuthUserReq };
