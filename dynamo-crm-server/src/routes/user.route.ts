import express from "express";

import verifyLogin from "../middleware/verifyLogin";
import { httpGetMyProfile } from "../controllers/user.controller";

const userRoutes = express.Router();

userRoutes.get("/me", verifyLogin, httpGetMyProfile);

export default userRoutes;
