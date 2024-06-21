import { FilterQuery } from "mongoose";
import { IUser } from "../../@types/user";
import User from "./user.schema";

const createNewUser = async (user: Partial<IUser>) => {
  const newUser = new User(user);
  return await newUser.save();
};

const findUser = async (param: FilterQuery<IUser>, select = {}) => {
  return await User.findOne(param).select({ ...select, __v: 0 });
};

export { createNewUser, findUser };
