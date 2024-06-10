import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { AuthUserReq } from "../@types/user";
import { findUser } from "../models/user/user.mongoose";

const httpGetMyProfile = async (req: Request, res: Response) => {
  const { _id } = req.user as AuthUserReq;
  const user = await findUser({ _id });
  return res.status(StatusCodes.OK).json(user);
};

export { httpGetMyProfile };
