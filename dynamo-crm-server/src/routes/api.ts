import express from "express";
import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import orderRoutes from "./order.route";

const apiRoutes = express.Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/user", userRoutes);
apiRoutes.use("/orders", orderRoutes);

export default apiRoutes;
