import morgan from "morgan";
import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(morgan("dev"));

//api routes
app.use("/", apiRoutes);

export default app;
