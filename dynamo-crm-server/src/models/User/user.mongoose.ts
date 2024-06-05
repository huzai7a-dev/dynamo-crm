import { FilterQuery } from "mongoose";
import { IUser } from "../../@types/user";
import User from "./user.schema";

const createNewUser = async (user: Partial<IUser>) => {
  const newUser = new User(user);
  return await newUser.save();
};

const findUser = async (param: FilterQuery<IUser>) => {
  return await User.findOne(param);
};

export { createNewUser, findUser };
