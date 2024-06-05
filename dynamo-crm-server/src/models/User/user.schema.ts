import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { IUser, IUserMethods, IUserModel } from "../../@types/user";

const userSchema = new mongoose.Schema<IUser, IUserModel, IUserMethods>({
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
    min: 6,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  primary_email: {
    type: String,
    required: true,
    unique: true,
  },
  secondary_email: {
    type: String,
    required: true,
  },
  invoice_email: {
    type: String,
    required: true,
    unique: true,
  },
  contact_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  cell: String,
  zip_code: String,
  country: String,
  city: String,
  reference: {
    type: String,
    enum: ["Search Engine", "Sales Manager", "Customer Reference", "Others"],
  },
  address: String,
  website: String,
  state: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

userSchema.method("signJwt", function signJwt() {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_SECRET_KEY!
  );
});

const User = mongoose.model<IUser, IUserModel>("user", userSchema);

export default User;
