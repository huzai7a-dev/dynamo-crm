import morgan from "morgan";
import express from "express";
import apiRoutes from "./routes/api";
const app = express();

//built in middleware
app.use(express.json());
app.use(morgan("dev"));

//api routes
app.use("/", apiRoutes);

export default app;
