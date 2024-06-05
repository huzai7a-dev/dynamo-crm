import express from "express";
import { loginSchema, signUpSchema } from "../models/User/user.validation";
import { validatePayload } from "../middleware/validatePayload";
import { httpSignInUser, httpSignUpUser } from "../controllers/auth.controller";

const authRoutes = express.Router();

authRoutes.post("/sign-up", validatePayload(signUpSchema), httpSignUpUser);
authRoutes.post("/sign-in", validatePayload(loginSchema), httpSignInUser);

export default authRoutes;
