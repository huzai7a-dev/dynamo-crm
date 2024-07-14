import { z } from "zod";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { signUpValidationSchema } from "../models/user/user.validation";
import { comparePassword, hashPassword } from "../utils/helper";
import { createNewUser, findUser } from "../models/user/user.mongoose";

const httpSignUpUser = async (req: Request, res: Response) => {
  const payload = req.body as z.infer<typeof signUpValidationSchema>;
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
      profile: {
        _id: user._id,
        isAdmin: user.isAdmin,
        user_name: user.user_name,
        contact_name: user.contact_name,
        primary_email: user.primary_email,
      },
    },
  });
};

export { httpSignUpUser, httpSignInUser };
