import express from "express";
import authRoutes from "./auth.route";

const apiRoutes = express.Router();

apiRoutes.use("/auth", authRoutes);

export default apiRoutes;
