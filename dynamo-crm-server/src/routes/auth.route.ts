import express from "express";
import {
  loginValidationSchema,
  signUpValidationSchema,
} from "../models/user/user.validation";
import { validatePayload } from "../middleware/validatePayload";
import { httpSignInUser, httpSignUpUser } from "../controllers/auth.controller";

const authRoutes = express.Router();

authRoutes.post(
  "/sign-up",
  validatePayload(signUpValidationSchema),
  httpSignUpUser
);

authRoutes.post(
  "/sign-in",
  validatePayload(loginValidationSchema),
  httpSignInUser
);

export default authRoutes;
