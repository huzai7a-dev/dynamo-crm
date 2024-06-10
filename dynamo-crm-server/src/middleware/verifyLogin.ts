import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const verifyLogin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");

  if (!token)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.decode(token) || {};
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: "Invalid token." });
  }
};

export default verifyLogin;
