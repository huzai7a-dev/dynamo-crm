import { z } from "zod";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { signUpSchema } from "../models/User/user.validation";
import { comparePassword, hashPassword } from "../utils/auth";
import { createNewUser, findUser } from "../models/User/user.mongoose";
import User from "../models/User/user.schema";

const httpSignUpUser = async (req: Request, res: Response) => {
  const payload = req.body as z.infer<typeof signUpSchema>;
  const user = await findUser({ user_name: payload.user_name });

  if (user)
    return res
      .status(StatusCodes.CONFLICT)
      .json({ message: "User already exists" });

  payload.password = await hashPassword(payload.password);
  await createNewUser(payload);
  return res
    .status(StatusCodes.CREATED)
    .json({ message: "User created successfully" });
};

const httpSignInUser = async (req: Request, res: Response) => {
  const { user_name, password } = req.body;

  const user = await findUser({ user_name });

  if (!user)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Invalid email or password" });

  const isPasswordCorrect = await comparePassword(password, user.password);

  if (!isPasswordCorrect)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Invalid email or password" });

  const token = user.signJwt();
  return res.status(StatusCodes.OK).json({
    message: "Login successfully",
    data: {
      token,
      _id: user._id,
      isAdmin: user.isAdmin,
    },
  });
};

export { httpSignUpUser, httpSignInUser };
