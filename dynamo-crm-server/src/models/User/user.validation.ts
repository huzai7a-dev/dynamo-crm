import { z } from "zod";

const signUpValidationSchema = z.object({
  user_name: z.string().min(6, "User name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  primary_email: z.string().email("Invalid email address"),
  secondary_email: z.string().email("Invalid email address"),
  invoice_email: z.string().email("Invalid email address"),
  contact_name: z.string().min(1, "Contact name is required"),
  phone: z.string().min(1, "Phone number is required"),
  cell: z.string().optional(),
  zip_code: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  reference: z
    .enum(["Search Engine", "Sales Manager", "Customer Reference", "Others"])
    .optional(),
  address: z.string().optional(),
  website: z.string().url().optional(),
  state: z.string().optional(),
});

const loginValidationSchema = z.object({
  user_name: z.string().min(6, "User name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export { signUpValidationSchema, loginValidationSchema };
