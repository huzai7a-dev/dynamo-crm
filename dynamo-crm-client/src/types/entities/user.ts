interface IUser {
  user_name: string;
  isAdmin: boolean;
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

export type { IUser };
